import { Input, Button, CloseButton, Group } from '@mantine/core'

import React, { useState, Dispatch, SetStateAction } from 'react'

import { NoteType } from '../types'
import { addNote } from '../api/addNote'

type AddNoteProps = {
  notes: NoteType[]
  setNotes: Dispatch<SetStateAction<any>>
}

export function AddNote({ notes, setNotes }: AddNoteProps) {
  const [text, setText] = useState('')

  const handleClick = () => {
    addNote(text, notes, setNotes)
    setText('')
  }

  return (
    <Group justify="center" gap="sm">
      <Input
        placeholder="New Note"
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setText('')}
            style={{ display: text ? undefined : 'none' }}
          />
        }
      />
      <Button onClick={handleClick}>Add Note</Button>
    </Group>
  )
}
