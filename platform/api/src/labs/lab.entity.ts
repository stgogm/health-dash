import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Relation } from 'typeorm'

import { Patient } from '../patients/patient.entity'

@Entity()
export class Lab {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @ManyToOne(() => Patient, (patient) => patient.labs)
  patient!: Relation<Patient>

  @Column()
  testType!: string

  @Column({ type: 'timestamp' })
  orderedAt!: Date

  @Column({ nullable: true })
  result!: string

  @Column({ default: 'pending' })
  status!: 'pending' | 'completed'
}
