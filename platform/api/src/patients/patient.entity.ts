import { PatientDto, PatientSex } from '@common/types'
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Relation,
  Entity,
  Column,
} from 'typeorm'

import { Appointment } from '../appointments/appointment.entity'
import { Lab } from '../labs/lab.entity'

@Entity('patients')
export class Patient implements Omit<PatientDto, 'createdAt' | 'updatedAt'> {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  firstName!: string

  @Column()
  lastName!: string

  @Column({ type: 'date' })
  birthDate!: string

  @Column()
  sex!: PatientSex

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointments!: Relation<Appointment>[]

  @OneToMany(() => Lab, (lab) => lab.patient)
  labs!: Relation<Lab>[]
}
