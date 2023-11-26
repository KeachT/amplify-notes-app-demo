import { useCallback } from 'react'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { Button } from '@mantine/core'

import React, { useState, useEffect } from 'react'
import { generateClient, GraphQLQuery } from '@aws-amplify/api'
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from '../graphql/mutations'
import { listNotes as listNotesQuery } from '../graphql/queries'

interface Note {
  id: string
  text: string
}

const AddNoteComponent: React.FC<{ addNote: (noteText: string) => void }> = ({
  addNote,
}) => {
  const [text, setText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleClick = () => {
    addNote(text)
    setText('')
  }

  return (
    <div style={styles.form}>
      <input
        value={text}
        onChange={handleChange}
        placeholder="New Note"
        style={styles.input}
      />
      <button onClick={handleClick} style={styles.addButton}>
        Add Note
      </button>
    </div>
  )
}

const NotesListComponent: React.FC<{
  notes: Note[]
  deleteNote: (note: Note) => void
}> = ({ notes, deleteNote }) => (
  <div>
    {notes.map((note) => (
      <div key={note.id} style={styles.note}>
        <p>{note.text}</p>
        <button onClick={() => deleteNote(note)} style={styles.deleteButton}>
          x
        </button>
      </div>
    ))}
  </div>
)

const NoteApp: React.FC = () => {
  const client = generateClient()
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    const fetchNotes = async () => {
      const result = await client.graphql({
        query: listNotesQuery,
        authMode: 'userPool',
      })

      setNotes(result.data.listNotes.items)
    }

    fetchNotes()
    // eslint-disable-next-line
  }, [])

  const deleteNote = async (note: Note) => {
    const id = {
      id: note.id,
    }

    await client.graphql({
      query: deleteNoteMutation,
      variables: { input: id },
      authMode: 'userPool',
    })

    setNotes(notes.filter((item) => item.id !== note.id))
  }

  const addNote = async (noteText: string) => {
    const result = await client.graphql({
      query: createNoteMutation,
      variables: { input: { text: noteText } },
      authMode: 'userPool',
    })

    setNotes([...notes, result.data.createNote])
  }

  return (
    <div style={styles.container}>
      <h1>Notes App</h1>
      <AddNoteComponent addNote={addNote} />
      <NotesListComponent notes={notes} deleteNote={deleteNote} />
    </div>
  )
}

const styles = {
  container: { width: 480, margin: '0 auto', padding: 20 },
  form: { display: 'flex', marginBottom: 15 },
  input: {
    flexGrow: 2,
    border: 'none',
    backgroundColor: '#ddd',
    padding: 12,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: 'black',
    color: 'white',
    outline: 'none',
    padding: 12,
    fontSize: 18,
  },
  note: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 22,
    marginBottom: 15,
  },
  deleteButton: { fontSize: 18, fontWeight: 'bold' },
}

export default function Home() {
  const handleSignOut = useHandleSignOut()

  return (
    <div>
      <div>Home</div>

      <NoteApp />

      <Button
        variant="outline"
        onClick={(event) => {
          handleSignOut()
          event.preventDefault()
        }}
      >
        <span>Log out</span>
      </Button>
    </div>
  )
}

export function useHandleSignOut() {
  const { signOut } = useAuthenticator()

  const handleSignOut = useCallback(async () => {
    try {
      await signOut()
      console.log('Signed out')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }, [signOut])

  return handleSignOut
}
