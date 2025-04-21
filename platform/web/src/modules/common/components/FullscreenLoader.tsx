import { Box, Center, Spinner } from '@chakra-ui/react'

export const FullscreenLoader = () => (
  <Box pos="absolute" inset="0" bg="bg/80">
    <Center h="full">
      <Spinner size="xl" />
    </Center>
  </Box>
)
