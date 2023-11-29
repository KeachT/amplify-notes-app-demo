import { Button } from '@mantine/core'

import { useHandleSignOut } from './useHandleSignOut'

export function Footer() {
  const handleSignOut = useHandleSignOut()
  return (
    <Button
      m={10}
      variant="outline"
      onClick={(event) => {
        handleSignOut()
        event.preventDefault()
      }}
    >
      <span>Log out</span>
    </Button>
  )
}
