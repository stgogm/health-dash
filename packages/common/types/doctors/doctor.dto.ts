export class DoctorDto {
  id!: string
  firstName!: string
  lastName!: string
  specialty!: string
  active!: boolean
  createdAt!: string
  updatedAt!: string
}

export class DoctorWithStatsDto extends DoctorDto {
  appointments!: number
  patients!: number
}
