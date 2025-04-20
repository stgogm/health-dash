import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { Sidebar } from './components/Sidebar'
import { Topbar } from './components/Topbar'

interface Props {
  children: ReactNode
}

export const DashboardLayout = ({ children }: Props) => (
  <Flex h="100vh" bg="gray.50">
    <Sidebar />
    <Box flex="1" display="flex" flexDirection="column">
      <Topbar />
      <Box as="main" p={6} flex="1" overflowY="auto">
        {children}
      </Box>
    </Box>
  </Flex>
)
