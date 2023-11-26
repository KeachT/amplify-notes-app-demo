import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify'
import awsExports from '../aws-exports'
import { LoadingIndicator } from '../components/LoadingIndicator'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'

import type { AppProps } from 'next/app'

Amplify.configure(awsExports)

const theme = createTheme({
  /** Put your mantine theme override here */
})

export default function App(props: AppProps) {
  return (
    <Authenticator.Provider>
      <MantineProvider theme={theme}>
        <MyApp {...props} />
      </MantineProvider>
    </Authenticator.Provider>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const { authStatus } = useAuthenticator((context) => [context.authStatus])
  const router = useRouter()
  const isLoading = checkIsLoading(authStatus)

  console.log('authStatus', authStatus)
  console.log('isLoading', isLoading)

  useEffect(() => {
    if (authStatus === 'unauthenticated') {
      router.push('/login')
    }
    if (authStatus === 'authenticated') {
      router.push('/')
    }
    // eslint-disable-next-line
  }, [authStatus])

  return isLoading ? <LoadingIndicator /> : <Component {...pageProps} />
}

const checkIsLoading = (authStatus: string) =>
  authStatus !== 'unauthenticated' && authStatus !== 'authenticated'

// import React from 'react'
// import { Amplify } from 'aws-amplify'

// import { Authenticator } from '@aws-amplify/ui-react'
// import '@aws-amplify/ui-react/styles.css'

// import awsExports from '../aws-exports'
// Amplify.configure(awsExports)

// export default function App() {
//   return (
//     <Authenticator>
//       {({ signOut, user }) => (
//         <main>
//           <h1>Hello {user?.username}</h1>
//           <button onClick={signOut}>Sign out</button>
//         </main>
//       )}
//     </Authenticator>
//   )
// }
