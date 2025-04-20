import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Relation,
  Entity,
  Column,
  Index,
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

  @Column({ nullable: true })
  result!: string

  @Column({ default: 'pending' as LabStatus })
  status!: LabStatus

  @Column()
  orderedAt!: Date

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @Index()
  @ManyToOne(() => Patient, (patient) => patient.labs)
  patient!: Relation<Patient>
}
