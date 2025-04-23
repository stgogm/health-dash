import { Badge, Box, Card, Flex, Image, Text } from '@chakra-ui/react'
import type { DoctorDto } from '@common/types'

interface Props {
  doctor: DoctorDto
}

export const DoctorDetailsCard = ({ doctor }: Props) => (
  <Card.Root flexDirection="row" overflow="hidden">
    <Image
      src={`https://i.pravatar.cc/300?u=${doctor.id}`}
      alt={`${doctor.firstName} ${doctor.lastName}`}
      objectFit="cover"
      maxW="200px"
    />
    <Box>
      <Card.Body>
        <Card.Title mb="4">
          {doctor.firstName} {doctor.lastName}
          <Text color="fg.muted" textStyle="sm" textTransform="capitalize">
            {doctor.specialty}
          </Text>
        </Card.Title>
        <Flex gap="2">
          <Badge colorPalette="blue">
            Joined {new Date(doctor.createdAt).toLocaleDateString()}
          </Badge>
          <Badge colorPalette={doctor.active ? 'green' : 'gray'}>
            {doctor.active ? 'Active' : 'Inactive'}
          </Badge>
        </Flex>
      </Card.Body>
    </Box>
  </Card.Root>
)
