import { AppointmentDto, AppointmentStatus } from '@common/types'
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Relation,
  Column,
  Entity,
} from 'typeorm'

import { Patient } from '../patients/patient.entity'
import { Doctor } from '../doctors/doctor.entity'

@Entity('appointments')
export class Appointment
  implements
    Omit<AppointmentDto, 'patientId' | 'doctorId' | 'createdAt' | 'updatedAt'>
{
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'timestamp' })
  scheduledAt!: Date

  @Column({ default: 'scheduled' })
  status!: AppointmentStatus

  @Column({ nullable: true })
  doctorNotes!: string

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @ManyToOne(() => Patient, (patient) => patient.appointments)
  patient!: Relation<Patient>

  @ManyToOne(() => Doctor, (doctor) => doctor.appointments)
  doctor!: Relation<Doctor>
}
