import { Box, Flex, Spacer, Text } from '@chakra-ui/react'

export const Topbar = () => (
  <Box bg="white" px={6} py={4} boxShadow="sm">
    <Flex align="center">
      <Text fontSize="lg" fontWeight="medium">
        Dashboard
      </Text>
      <Spacer />
      <Text color="gray.500" fontSize="sm">
        Logged in as Admin
      </Text>
    </Flex>
  </Box>
)
