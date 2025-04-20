import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Relation,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { LabDto, LabStatus } from '@common/types'

import { Patient } from '../patients/patient.entity'

@Entity('labs')
export class Lab
  implements Omit<LabDto, 'patientId' | 'createdAt' | 'updatedAt'>
{
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string

  @Column({ type: 'date' })
  orderedAt!: Date

  @Column({ nullable: true })
  result!: string

  @Column({ default: 'pending' })
  status!: LabStatus

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @ManyToOne(() => Patient, (patient) => patient.labs)
  patient!: Relation<Patient>
}
