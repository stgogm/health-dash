import { Heading, Text } from '@chakra-ui/react'

import { DashboardLayout } from './Dashboard.layout'

export const DashboardPage = () => (
  <DashboardLayout>
    <Heading size="md" mb={2}>
      Welcome
    </Heading>
    <Text>This is your dashboard overview.</Text>
  </DashboardLayout>
)
