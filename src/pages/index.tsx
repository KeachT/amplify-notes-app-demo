import { useCallback } from 'react'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { Button } from '@mantine/core'

export default function Home() {
  const handleSignOut = useHandleSignOut()

  return (
    <div>
      <div>Home</div>

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

export function useHandleSignOut() {
  const { signOut } = useAuthenticator()

  const handleSignOut = useCallback(async () => {
    try {
      await signOut()
      console.log('Signed out')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }, [signOut])

  return handleSignOut
}
