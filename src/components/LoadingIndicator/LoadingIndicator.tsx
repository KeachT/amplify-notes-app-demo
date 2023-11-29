import { Flex, Loader } from '@mantine/core'

export function LoadingIndicator() {
  return (
    <Flex justify="center" align="center" mt={300}>
      <Loader color="lime" size="xl" variant="bars" />
    </Flex>
  )
}
