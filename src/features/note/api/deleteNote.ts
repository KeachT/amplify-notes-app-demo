import { generateClient } from '@aws-amplify/api'

import { Dispatch, SetStateAction } from 'react'
import { NoteType } from '../types'
import { deleteNote as deleteNoteMutation } from '../../../graphql/mutations'

export const deleteNote = async (
  note: NoteType,
  notes: NoteType[],
  setNotes: Dispatch<SetStateAction<any>>
) => {
  const client = generateClient()

  const id = {
    id: note.id,
  }

  await client.graphql({
    query: deleteNoteMutation,
    variables: { input: id },
    authMode: 'userPool',
  })

  setNotes(notes.filter((item: any) => item.id !== note.id))
}
