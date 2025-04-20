import { AppointmentStatus } from './appointment.types'

export class AppointmentDto {
  id!: string
  patientId!: string
  doctorId!: string
  scheduledAt!: Date
  status!: AppointmentStatus
  doctorNotes!: string
  createdAt!: string
  updatedAt!: string
}
