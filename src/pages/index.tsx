import { Stack, Title } from '@mantine/core'

import React from 'react'

import { Layout } from '../components/Layout'
import { Note } from '../features/note'

export default function Home() {
  return (
    <Layout title="Home">
      <Stack align="center">
        <Title>Notes</Title>
        <Note />
      </Stack>
    </Layout>
  )
}
