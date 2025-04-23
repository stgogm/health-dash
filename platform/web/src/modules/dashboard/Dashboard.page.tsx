import type { DashboardSummaryDto } from '@common/types'
import { SimpleGrid, Heading } from '@chakra-ui/react'
import useSWR from 'swr'

import { FullscreenLoader, SimpleAlert } from '@/modules/common/components'
import { getApiUrl } from '@/lib/apiUrl'
import { fetcher } from '@/lib/fetcher'

import { RecentAppointmentsList } from './components/RecentAppointmentsList'
import { AppointmentsStatsCard } from './components/AppointmentsStatsCard'
import { UsersCountCard } from './components/UsersCountCard'

export const DashboardPage = () => {
  const { data, error, isLoading } = useSWR<DashboardSummaryDto>(
    getApiUrl('dashboard'),
    fetcher
  )

  if (isLoading) {
    return <FullscreenLoader />
  }

  if (error) {
    return (
      <SimpleAlert
        title="Failed to load dashboard data."
        message={error.message}
        status="error"
      />
    )
  }

  if (!data) {
    return (
      <SimpleAlert
        message="Start using the app to generate data to see the main stats here."
        title="There's no data available."
        status="info"
      />
    )
  }

  return (
    <>
      <Heading mb="4">Statistics</Heading>
      <SimpleGrid columns={2} gap={6}>
        <UsersCountCard data={data} />
        <AppointmentsStatsCard appointmentsStats={data.appointmentsStats} />
      </SimpleGrid>

      <Heading my="4">Recent Appointments</Heading>
      <RecentAppointmentsList recentAppointments={data.recentAppointments} />
    </>
  )
}
