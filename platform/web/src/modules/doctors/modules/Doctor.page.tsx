import type { DoctorWithStatsDto } from '@common/types'
import { useParams } from 'react-router'
import useSWR from 'swr'
import {
  SimpleGrid,
  Alert,
  Badge,
  Image,
  Table,
  Card,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react'

import { FullscreenLoader } from '@/modules/common/components/FullscreenLoader'
import { useApiUrl } from '@/lib/apiUrl'
import { fetcher } from '@/lib/fetcher'

export const DoctorPage = () => {
  const { id } = useParams()
  const apiUrl = useApiUrl()
  const { data, error, isLoading } = useSWR<DoctorWithStatsDto>(
    `${apiUrl}/doctors/${id}`,
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
          <Alert.Title>Failed to load doctor's data.</Alert.Title>
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
          <Alert.Title>Could not get doctor data.</Alert.Title>
        </Alert.Content>
      </Alert.Root>
    )
  }

  return (
    <SimpleGrid columns={2} gap="6">
      <Card.Root flexDirection="row" overflow="hidden">
        <Image
          src={`https://i.pravatar.cc/160?u=${data.id}`}
          alt={`${data.firstName} ${data.lastName}`}
          objectFit="cover"
          maxW="200px"
        />
        <Box>
          <Card.Body>
            <Card.Title mb="4">
              {data.firstName} {data.lastName}
              <Text color="fg.muted" textStyle="sm" textTransform="capitalize">
                {data.specialty}
              </Text>
            </Card.Title>
            <Flex gap="2">
              <Badge colorPalette="blue">
                Joined {new Date(data.createdAt).toLocaleDateString()}
              </Badge>
              <Badge colorPalette={data.active ? 'green' : 'gray'}>
                {data.active ? 'Active' : 'Inactive'}
              </Badge>
            </Flex>
          </Card.Body>
        </Box>
      </Card.Root>
      <Card.Root>
        <Card.Body>
          <Table.Root>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Appointments</Table.Cell>
                <Table.Cell>{data.appointments}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Patients</Table.Cell>
                <Table.Cell>{data.patients}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Card.Body>
      </Card.Root>
    </SimpleGrid>
  )
}
