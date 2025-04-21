import {
  Alert,
  Avatar,
  Badge,
  Card,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { DoctorDto } from '@common/types'
import { NavLink } from 'react-router'
import useSWR from 'swr'

import { FullscreenLoader } from '@/modules/common/components/FullscreenLoader'
import { useApiUrl } from '@/lib/apiUrl'
import { fetcher } from '@/lib/fetcher'

export const DoctorsPage = () => {
  const apiUrl = useApiUrl()
  const { data, error, isLoading } = useSWR<DoctorDto[]>(
    `${apiUrl}/doctors`,
    fetcher
  )

  if (isLoading) {
    return <FullscreenLoader />
  }

  if (error) {
    return (
      <Alert.Root status="error">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Failed to load doctors data.</Alert.Title>
          <Alert.Description>{error.message}</Alert.Description>
        </Alert.Content>
      </Alert.Root>
    )
  }

  if (!data) {
    return (
      <Alert.Root status="info">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>There's no doctors available.</Alert.Title>
        </Alert.Content>
      </Alert.Root>
    )
  }

  // TODO: Add pagination.

  return (
    <SimpleGrid columns={3} gap="6">
      {data.map((doctor) => (
        <Card.Root key={doctor.id} asChild>
          <NavLink to={`/doctors/${doctor.id}`}>
            <Card.Body>
              <HStack gap="4" mb="4">
                <Avatar.Root>
                  <Avatar.Image src={`https://i.pravatar.cc/160?u=${doctor.id}`} />
                  <Avatar.Fallback
                    name={`${doctor.firstName} ${doctor.lastName}`}
                  />
                </Avatar.Root>
                <Stack gap="0">
                  <Text fontWeight="semibold" textStyle="sm">
                    {doctor.firstName} {doctor.lastName}
                  </Text>
                  <Text
                    color="fg.muted"
                    textStyle="sm"
                    textTransform="capitalize"
                  >
                    {doctor.specialty}
                  </Text>
                </Stack>
              </HStack>
              <Flex gap="2">
                <Badge colorPalette="blue">
                  Joined {new Date(doctor.createdAt).toLocaleDateString()}
                </Badge>
                <Badge colorPalette={doctor.active ? 'green' : 'gray'}>
                  {doctor.active ? 'Active' : 'Inactive'}
                </Badge>
              </Flex>
            </Card.Body>
          </NavLink>
        </Card.Root>
      ))}
    </SimpleGrid>
  )
}
