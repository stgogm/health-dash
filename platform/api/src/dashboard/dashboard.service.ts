import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import {
  RecentAppointmentDto,
  DashboardSummaryDto,
  AppointmentStatus,
  AppointmentsStats,
} from '@common/types'

import { Appointment } from '../appointments/appointment.entity'
import { Patient } from '../patients/patient.entity'
import { Doctor } from '../doctors/doctor.entity'

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Patient)
    private readonly patients: Repository<Patient>,
    @InjectRepository(Doctor)
    private readonly doctors: Repository<Doctor>,
    @InjectRepository(Appointment)
    private readonly appointments: Repository<Appointment>
  ) {}

  async getSummary(): Promise<DashboardSummaryDto> {
    const patientsCount = await this.patients.count()
    const doctorsCount = await this.doctors.count()
    const appointmentStats = await this.appointments
      .createQueryBuilder('a')
      .select('a.status', 'status')
      .addSelect('COUNT(*)', 'count')
      .groupBy('a.status')
      .getRawMany<{ status: AppointmentStatus; count: number }>()

    const appointmentsStats: AppointmentsStats = {
      scheduled: 0,
      completed: 0,
      cancelled: 0,
    }

    for (const row of appointmentStats) {
      appointmentsStats[row.status] = Number(row.count)
    }

    const recentAppointments = (await this.appointments.find({
      relations: ['patient', 'doctor'],
      order: { scheduledAt: 'DESC' },
      take: 6,
    })) as unknown as RecentAppointmentDto[]

    return {
      recentAppointments,
      appointmentsStats,
      patientsCount,
      doctorsCount,
    }
  }
}
