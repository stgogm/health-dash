import { Box, Text, Icon, Button, Stack } from '@chakra-ui/react'
import {
  BriefcaseMedicalIcon,
  LayoutDashboardIcon,
  UsersIcon,
  CogIcon,
} from 'lucide-react'

export const Sidebar = () => (
  <Box bg="white" boxShadow="md" p={4}>
    <Text fontWeight="bold" fontSize="xl" mb="4">
      Welcome!
    </Text>
    <Stack align="start">
      <Button variant="ghost" w="full" justifyContent="start" colorPalette="blue">
        <Icon size="sm">
          <LayoutDashboardIcon />
        </Icon>
        <Text>Dashboard</Text>
      </Button>

      <Button variant="ghost" w="full" justifyContent="start">
        <Icon size="sm" mr="2">
          <UsersIcon />
        </Icon>
        <Text cursor="pointer">Patients</Text>
      </Button>

      <Button variant="ghost" w="full" justifyContent="start">
        <Icon size="sm" mr="2">
          <BriefcaseMedicalIcon />
        </Icon>
        <Text cursor="pointer">Doctors</Text>
      </Button>

      <Button variant="ghost" w="full" justifyContent="start">
        <Icon size="sm" mr="2">
          <CogIcon />
        </Icon>
        <Text cursor="pointer">Settings</Text>
      </Button>
    </Stack>
  </Box>
)
