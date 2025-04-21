import type { DoctorDto } from '@common/types'
import { Alert, Badge, Box, Card, Flex, Image, Text } from '@chakra-ui/react'
import useSWR from 'swr'

import { FullscreenLoader } from '@/modules/common/components/FullscreenLoader'
import { useApiUrl } from '@/lib/apiUrl'
import { fetcher } from '@/lib/fetcher'
import { useParams } from 'react-router'

export const DoctorPage = () => {
  const { id } = useParams()
  const apiUrl = useApiUrl()
  const { data, error, isLoading } = useSWR<DoctorDto>(
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
    <>
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
    </>
  )
}
