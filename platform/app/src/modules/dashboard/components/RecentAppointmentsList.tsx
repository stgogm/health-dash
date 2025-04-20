import { Badge, Card, Flex, Icon, SimpleGrid, Text } from '@chakra-ui/react'
import { CalendarIcon, CheckCircleIcon } from 'lucide-react'
import { RecentAppointmentDto } from '@common/types'

export const RecentAppointmentsList = ({
  recentAppointments,
}: {
  recentAppointments: RecentAppointmentDto[]
}) => (
  <SimpleGrid columns={3} gap={6}>
    {recentAppointments.map((appointment) => (
      <Card.Root>
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
