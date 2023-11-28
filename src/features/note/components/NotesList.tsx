import React, { Dispatch, SetStateAction } from 'react'
import { NoteType } from '../types'
import { deleteNote } from '../api/deleteNote'

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

export const NotesList: React.FC<{
  notes: NoteType[]
  setNotes: Dispatch<SetStateAction<any>>
}> = ({ notes, setNotes }) => (
  <div>
    {notes.map((note) => (
      <div key={note.id} style={styles.note}>
        <p>{note.text}</p>
        <button
          onClick={() => deleteNote(note, notes, setNotes)}
          style={styles.deleteButton}
        >
          x
        </button>
      </div>
    ))}
  </div>
)
