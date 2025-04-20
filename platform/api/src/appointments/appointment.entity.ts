import { AppointmentDto, AppointmentStatus } from '@common/types'
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Relation,
  Column,
  Entity,
  Index,
} from 'typeorm'

import { Patient } from '../patients/patient.entity'
import { Doctor } from '../doctors/doctor.entity'

@Entity('appointments')
export class Appointment
  implements
    Omit<
      AppointmentDto,
      'patientId' | 'doctorId' | 'createdAt' | 'updatedAt' | 'scheduledAt'
    >
{
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  scheduledAt!: Date

  @Column({ default: 'scheduled' as AppointmentStatus })
  status!: AppointmentStatus

  @Column({ nullable: true })
  doctorNotes!: string

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @Index()
  @ManyToOne(() => Patient, (patient) => patient.appointments)
  patient!: Relation<Patient>

  @Index()
  @ManyToOne(() => Doctor, (doctor) => doctor.appointments)
  doctor!: Relation<Doctor>
}
