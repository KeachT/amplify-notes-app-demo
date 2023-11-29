import { Box, Title } from '@mantine/core'

export function LayoutHeader() {
  return (
    <Box style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <Title order={3} m="sm">
        Notes App Demo
      </Title>
    </Box>
  )
}
