import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router'

const getTitle = (pathname: string) => {
  if (pathname === '/') {
    return 'Dashboard'
  }

  if (pathname === '/doctors') {
    return 'Doctors'
  }

  if (/^\/doctors\/[a-f0-9-]{36}$/.test(pathname)) {
    return 'Doctor Details'
  }

  return ''
}

export const Topbar = () => {
  const { pathname } = useLocation()

  return (
    <Box bg="white" px={6} py={4} boxShadow="sm">
      <Flex align="center">
        <Text fontSize="lg" fontWeight="medium">
          {getTitle(pathname)}
        </Text>
        <Spacer />
        <Text color="gray.500" fontSize="sm">
          Logged in as Admin
        </Text>
      </Flex>
    </Box>
  )
}
