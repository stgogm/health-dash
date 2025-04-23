import type { DashboardSummaryDto } from '@common/types'
import { Card, Table } from '@chakra-ui/react'

interface Props {
  data: DashboardSummaryDto
}

export const UsersCountCard = ({
  data: { doctorsCount, patientsCount },
}: Props) => (
  <Card.Root variant="elevated">
    <Card.Header fontWeight="bold">Users</Card.Header>
    <Card.Body>
      <Table.Root>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Patients</Table.Cell>
            <Table.Cell>{patientsCount}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Doctors</Table.Cell>
            <Table.Cell>{doctorsCount}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Card.Body>
  </Card.Root>
)
