import { SimpleGrid } from '@chakra-ui/react'
import { DoctorDto } from '@common/types'
import useSWR from 'swr'

import { FullscreenLoader, SimpleAlert } from '@/modules/common/components'
import { getApiUrl } from '@/lib/apiUrl'
import { fetcher } from '@/lib/fetcher'

import { DoctorCard } from './components/DoctorCard'

export const DoctorsPage = () => {
  const { data, error, isLoading } = useSWR<DoctorDto[]>(
    getApiUrl('doctors'),
    fetcher
  )

  if (isLoading) {
    return <FullscreenLoader />
  }

  if (error) {
    return (
      <SimpleAlert
        title="Failed to load doctors data."
        message={error.message}
        status="error"
      />
    )
  }

  if (!data) {
    return <SimpleAlert title="There are no doctors available." />
  }

  // TODO: Add pagination.

  return (
    <SimpleGrid columns={3} gap="6">
      {data.map((doctor) => (
        <DoctorCard doctor={doctor} />
      ))}
    </SimpleGrid>
  )
}
