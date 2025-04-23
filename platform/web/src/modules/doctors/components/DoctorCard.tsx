import { DoctorDto } from '@common/types'
import { NavLink } from 'react-router'
import {
  Avatar,
  HStack,
  Badge,
  Stack,
  Card,
  Flex,
  Text,
} from '@chakra-ui/react'

interface Props {
  doctor: DoctorDto
}

export const DoctorCard = ({ doctor }: Props) => (
  <Card.Root key={doctor.id} asChild>
    <NavLink to={`/doctors/${doctor.id}`}>
      <Card.Body>
        <HStack gap="4" mb="4">
          <Avatar.Root>
            <Avatar.Image src={`https://i.pravatar.cc/160?u=${doctor.id}`} />
            <Avatar.Fallback name={`${doctor.firstName} ${doctor.lastName}`} />
          </Avatar.Root>
          <Stack gap="0">
            <Text fontWeight="semibold" textStyle="sm">
              {doctor.firstName} {doctor.lastName}
            </Text>
            <Text color="fg.muted" textStyle="sm" textTransform="capitalize">
              {doctor.specialty}
            </Text>
          </Stack>
        </HStack>
        <Flex gap="2">
          <Badge colorPalette="blue">
            Joined {new Date(doctor.createdAt).toLocaleDateString()}
          </Badge>
          <Badge colorPalette={doctor.active ? 'green' : 'gray'}>
            {doctor.active ? 'Active' : 'Inactive'}
          </Badge>
        </Flex>
      </Card.Body>
    </NavLink>
  </Card.Root>
)
