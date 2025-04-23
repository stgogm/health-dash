import { Box, Flex } from '@chakra-ui/react'
import type { ReactNode } from 'react'

import { Sidebar } from './components/Sidebar'
import { Topbar } from './components/Topbar'

type Props = { children: ReactNode }

export const AppLayout = ({ children }: Props) => (
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
