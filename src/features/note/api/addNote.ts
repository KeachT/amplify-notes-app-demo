import { generateClient } from '@aws-amplify/api'

import { Dispatch, SetStateAction } from 'react'
import { NoteType } from '../types'
import { createNote as createNoteMutation } from '../../../graphql/mutations'

export const addNote = async (
  noteText: string,
  notes: NoteType[],
  setNotes: Dispatch<SetStateAction<any>>
) => {
  const client = generateClient()

  const result = await client.graphql({
    query: createNoteMutation,
    variables: { input: { text: noteText } },
    authMode: 'userPool',
  })

  setNotes([...notes, result.data.createNote])
}
