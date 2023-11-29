import { Stack, Title } from '@mantine/core'

import React from 'react'

import { Layout } from '../components/Layout'
import { Note } from '../features/note'

export default function Home() {
  return (
    <Layout title="Home">
      {/* TODO 最後に消す、CICD動作確認用 */}
      <div>Home</div>

      <Stack align="center">
        <Title>Notes</Title>
        <Note />
      </Stack>
    </Layout>
  )
}
