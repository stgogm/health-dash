import type { LabStatus } from './lab.types'

export class LabDto {
  id!: string
  name!: string
  status!: LabStatus
  result!: string
  patientId!: string
  createdAt!: string
  updatedAt!: string
}
