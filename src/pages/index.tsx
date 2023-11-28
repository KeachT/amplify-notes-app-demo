import { Button } from '@mantine/core'

import React from 'react'
import { useHandleSignOut } from '../hooks/useHandleSignOut'
import { Note } from '../features/note'

export default function Home() {
  const handleSignOut = useHandleSignOut()

  return (
    <div>
      <div>Home</div>

      <Note />

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
