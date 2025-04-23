import type { DoctorWithStatsDto } from '@common/types'
import { SimpleGrid } from '@chakra-ui/react'
import { useParams } from 'react-router'
import useSWR from 'swr'

import { FullscreenLoader, SimpleAlert } from '@/modules/common/components'
import { getApiUrl } from '@/lib/apiUrl'
import { fetcher } from '@/lib/fetcher'

import { DoctorDetailsCard } from './components/DoctorDetailsCard'
import { DoctorStatsCard } from './components/DoctorStatsCard'

type PathParams = Readonly<{
  id: string
}>

export const DoctorPage = () => {
  const { id } = useParams<PathParams>()
  const { data, error, isLoading } = useSWR<DoctorWithStatsDto>(
    getApiUrl(['doctors', id!]), // id will always be in the path
    fetcher
  )

  if (isLoading) {
    return <FullscreenLoader />
  }

  if (error) {
    return (
      <SimpleAlert
        title="Failed to load doctor's data."
        message={error.message}
        status="error"
      />
    )
  }

  if (!data) {
    return <SimpleAlert title="Could not get doctor's data." status="warning" />
  }

  return (
    <SimpleGrid columns={2} gap="6">
      <DoctorDetailsCard doctor={data} />
      <DoctorStatsCard data={data} />
    </SimpleGrid>
  )
}
