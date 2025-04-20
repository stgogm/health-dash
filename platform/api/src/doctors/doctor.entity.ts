import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Relation } from 'typeorm'

import { Appointment } from '../appointments/appointment.entity'

@Entity()
export class Doctor {
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

  @OneToMany(() => Appointment, (appointment) => appointment.doctor)
  appointments!: Relation<Appointment>[]
}
