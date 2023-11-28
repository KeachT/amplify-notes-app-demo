import { generateClient } from '@aws-amplify/api'

import { Dispatch, SetStateAction } from 'react'
import { listNotes as listNotesQuery } from '../../../graphql/queries'

export const fetchNotes = async (setNotes: Dispatch<SetStateAction<any>>) => {
  const client = generateClient()

  const result = await client.graphql({
    query: listNotesQuery,
    authMode: 'userPool',
  })

  setNotes(result.data.listNotes.items)
}
