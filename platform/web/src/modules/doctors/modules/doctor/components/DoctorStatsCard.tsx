import type { DoctorWithStatsDto } from '@common/types'
import { Card, Table } from '@chakra-ui/react'

interface Props {
  data: DoctorWithStatsDto
}

export const DoctorStatsCard = ({ data }: Props) => (
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
)
