import { Box, Text, Icon, Button, Stack } from '@chakra-ui/react'
import { NavLink } from 'react-router'
import {
  BriefcaseMedicalIcon,
  LayoutDashboardIcon,
  UsersIcon,
  CogIcon,
} from 'lucide-react'

export const Sidebar = () => {
  return (
    <Box bg="white" boxShadow="md" p="4" as="nav" position="relative">
      <Text fontWeight="bold" fontSize="xl" mb="4">
        Welcome!
      </Text>
      <Stack align="start">
        <Button justifyContent="start" variant="ghost" w="full" asChild>
          <NavLink to="/">
            <Icon size="sm">
              <LayoutDashboardIcon />
            </Icon>
            <Text>Dashboard</Text>
          </NavLink>
        </Button>

        <Button variant="ghost" w="full" justifyContent="start" disabled>
          <Icon size="sm" mr="2">
            <UsersIcon />
          </Icon>
          <Text cursor="pointer">Patients</Text>
        </Button>

        <Button variant="ghost" w="full" justifyContent="start" asChild>
          <NavLink to="/doctors">
            <Icon size="sm" mr="2">
              <BriefcaseMedicalIcon />
            </Icon>
            <Text cursor="pointer">Doctors</Text>
          </NavLink>
        </Button>

        <Button variant="ghost" w="full" justifyContent="start" disabled>
          <Icon size="sm" mr="2">
            <CogIcon />
          </Icon>
          <Text cursor="pointer">Settings</Text>
        </Button>
      </Stack>
    </Box>
  )
}
