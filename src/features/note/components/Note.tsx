import React, { useState, useEffect } from 'react'

import { NoteType } from '../types'
import { fetchNotes } from '../api/fetchNotes'

import { AddNoteButton } from './AddNoteButton'
import { NotesList } from './NotesList'

export const Note: React.FC = () => {
  const [notes, setNotes] = useState<NoteType[]>([])

  useEffect(() => {
    fetchNotes(setNotes)
    // eslint-disable-next-line
  }, [])

  return (
    <div style={styles.container}>
      <h1>Notes App</h1>
      <AddNoteButton notes={notes} setNotes={setNotes} />
      <NotesList notes={notes} setNotes={setNotes} />
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
