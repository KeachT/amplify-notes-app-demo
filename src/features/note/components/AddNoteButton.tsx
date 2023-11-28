import React, { useState, Dispatch, SetStateAction } from 'react'

import { NoteType } from '../types'
import { addNote } from '../api/addNote'

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

export const AddNoteButton: React.FC<{
  notes: NoteType[]
  setNotes: Dispatch<SetStateAction<any>>
}> = ({ notes, setNotes }) => {
  const [text, setText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleClick = () => {
    addNote(text, notes, setNotes)
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
