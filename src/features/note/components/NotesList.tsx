import { Box, Button, Group, Stack, Text } from '@mantine/core'

import { Dispatch, SetStateAction } from 'react'

import { NoteType } from '../types'
import { deleteNote } from '../api/deleteNote'

type NotesListProps = {
  notes: NoteType[]
  setNotes: Dispatch<SetStateAction<any>>
}

export function NotesList({ notes, setNotes }: NotesListProps) {
  return (
    <Stack>
      {notes.map((note) => (
        <Group key={note.id} align="center" gap="xl" mt={10}>
          <Box w={240} h={20}>
            <Text>{note.text}</Text>
          </Box>
          <Button size="xs" onClick={() => deleteNote(note, notes, setNotes)}>
            x
          </Button>
        </Group>
      ))}
    </Stack>
  )
}
