import { Box } from '@mantine/core'

import { useState, useEffect } from 'react'

import { NoteType } from '../types'
import { fetchNotes } from '../api/fetchNotes'
import { AddNote } from './AddNote'
import { NotesList } from './NotesList'

export function Note() {
  const [notes, setNotes] = useState<NoteType[]>([])

  useEffect(() => {
    fetchNotes(setNotes)
    // eslint-disable-next-line
  }, [])

  return (
    <Box>
      <AddNote notes={notes} setNotes={setNotes} />
      <Box mt={20}>
        <NotesList notes={notes} setNotes={setNotes} />
      </Box>
    </Box>
  )
}
