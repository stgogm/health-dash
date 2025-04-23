import { Badge, Card, Flex, Icon, SimpleGrid, Text } from '@chakra-ui/react'
import { CalendarIcon, CheckCircleIcon } from 'lucide-react'
import type { RecentAppointmentDto } from '@common/types'

interface Props {
  recentAppointments: RecentAppointmentDto[]
}

export const RecentAppointmentsList = ({ recentAppointments }: Props) => (
  <SimpleGrid columns={3} gap={6}>
    {recentAppointments.map((appointment) => (
      <Card.Root key={appointment.id}>
        <Card.Body>
          <Text>
            <Text as="strong">
              {appointment.patient.firstName} {appointment.patient.lastName}
            </Text>{' '}
            with {appointment.doctor.firstName} {appointment.doctor.lastName}
          </Text>
          <Flex gap={2}>
            <Badge colorPalette="blue">
              <Icon size="xs">
                <CalendarIcon />
              </Icon>
              {new Date(appointment.scheduledAt).toLocaleDateString()}
            </Badge>
            <Badge>
              <Icon size="xs">
                <CheckCircleIcon />
              </Icon>
              {appointment.status}
            </Badge>
          </Flex>
        </Card.Body>
      </Card.Root>
    ))}
  </SimpleGrid>
)
