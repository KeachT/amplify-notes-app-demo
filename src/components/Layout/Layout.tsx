import { AppShell } from '@mantine/core'
import Head from 'next/head'
import { ReactNode } from 'react'

import { LayoutHeader } from '../LayoutHeader'
import { Footer } from '../Footer'

type LayoutProps = {
  title: string
  children: ReactNode
}

export function Layout({ title = '', children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{`${title}`}</title>
      </Head>

      <AppShell
        m={20}
        header={{ height: 60 }}
        footer={{ height: 60 }}
        padding="md"
      >
        <AppShell.Header>
          <LayoutHeader />
        </AppShell.Header>

        <AppShell.Main>{children}</AppShell.Main>

        <AppShell.Footer>
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </div>
  )
}
