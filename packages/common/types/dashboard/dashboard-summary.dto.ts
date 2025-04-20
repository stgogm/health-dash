import type { AppointmentStats } from '../appointments/appointment.types'
import { AppointmentDto } from '../appointments/appointment.dto'
import { PatientDto } from '../patients'
import { DoctorDto } from '../doctors'

export interface RecentAppointmentDto extends AppointmentDto {
  patient: PatientDto
  doctor: DoctorDto
}

export class DashboardSummaryDto {
  recentAppointments!: RecentAppointmentDto[]
  appointmentsStats!: AppointmentStats
  patientsCount!: number
  doctorsCount!: number
}
