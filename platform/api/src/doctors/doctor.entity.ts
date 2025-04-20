import { DoctorDto } from '@common/types'
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Relation,
  Column,
  Entity,
} from 'typeorm'

import { Appointment } from '../appointments/appointment.entity'

@Entity('doctors')
export class Doctor implements Omit<DoctorDto, 'createdAt' | 'updatedAt'> {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  firstName!: string

  @Column()
  lastName!: string

  @Column()
  specialty!: string

  @Column({ default: true })
  active!: boolean

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @OneToMany(() => Appointment, (appointment) => appointment.doctor)
  appointments!: Relation<Appointment>[]
}
