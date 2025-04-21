import type { DashboardSummaryDto } from '@common/types'
import { Card, Table } from '@chakra-ui/react'

export const UsersCountCard = ({
  data: { doctorsCount, patientsCount },
}: {
  data: DashboardSummaryDto
}) => (
  <Card.Root>
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
