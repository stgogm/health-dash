import { SimpleGrid, Heading, Alert } from '@chakra-ui/react'
import type { DashboardSummaryDto } from '@common/types'
import useSWR from 'swr'

import { FullscreenLoader } from '@/modules/common/components/FullscreenLoader'
import { fetcher } from '@/lib/fetcher'

import { RecentAppointmentsList } from './components/RecentAppointmentsList'
import { AppointmentsStatsCard } from './components/AppointmentsStatsCard'
import { UsersCountCard } from './components/UsersCountCard'

const apiUrl = import.meta.env.VITE_API_URL

export const DashboardPage = () => {
  const { data, error, isLoading } = useSWR<DashboardSummaryDto>(
    `${apiUrl}/dashboard`,
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
          <Alert.Title>Failed to load dashboard data.</Alert.Title>
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
          <Alert.Title>There's no data available.</Alert.Title>
          <Alert.Description>
            Start using the app to generate data to see the main stats here.
          </Alert.Description>
        </Alert.Content>
      </Alert.Root>
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
