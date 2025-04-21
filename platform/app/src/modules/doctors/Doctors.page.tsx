import { DoctorDto } from '@common/types'
import { fetcher } from '@/lib/fetcher'
import useSWR from 'swr'

import { FullscreenLoader } from '../common/components/FullscreenLoader'
import { Alert } from '@chakra-ui/react'

const apiUrl = import.meta.env.VITE_API_URL

export const DoctorsPage = () => {
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

  return <></>
}
