import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Relation } from 'typeorm'

import { Patient } from '../patients/patient.entity'
import { Doctor } from '../doctors/doctor.entity'

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @ManyToOne(() => Patient, (patient) => patient.appointments)
  patient!: Relation<Patient>

  @ManyToOne(() => Doctor, (doctor) => doctor.appointments)
  doctor!: Relation<Doctor>

  @Column({ type: 'timestamp' })
  scheduledAt!: Date

  @Column({ default: 'scheduled' })
  status!: 'scheduled' | 'completed' | 'cancelled'

  @Column({ nullable: true })
  doctorNotes!: string
}
