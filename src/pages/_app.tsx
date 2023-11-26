import '@aws-amplify/ui-react/styles.css'
import '@mantine/core/styles.css'

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import { MantineProvider, createTheme } from '@mantine/core'
import { Amplify } from 'aws-amplify'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import awsExports from '../aws-exports'
import { LoadingIndicator } from '../components/LoadingIndicator'
import { checkIsLoading } from '../utils/checkIsLoading'

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
