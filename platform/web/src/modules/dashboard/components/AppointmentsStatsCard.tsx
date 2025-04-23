import type { AppointmentsStats } from '@common/types'
import { Card, Table } from '@chakra-ui/react'

interface Props {
  appointmentsStats: AppointmentsStats
}

export const AppointmentsStatsCard = ({ appointmentsStats }: Props) => (
  <Card.Root>
    <Card.Header fontWeight="bold">Appointments</Card.Header>
    <Card.Body>
      <Table.Root>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Scheduled</Table.Cell>
            <Table.Cell>{appointmentsStats.scheduled}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Completed</Table.Cell>
            <Table.Cell>{appointmentsStats.completed}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cancelled</Table.Cell>
            <Table.Cell>{appointmentsStats.cancelled}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Card.Body>
  </Card.Root>
)
