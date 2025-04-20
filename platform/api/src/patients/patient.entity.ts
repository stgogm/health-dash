import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Relation } from 'typeorm'

import { Appointment } from '../appointments/appointment.entity'
import { Lab } from '../labs/lab.entity'

@Entity()
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  firstName!: string

  @Column()
  lastName!: string

  @Column({ type: 'date' })
  birthDate!: string

  @Column()
  gender!: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date

  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointments!: Relation<Appointment>[]

  @OneToMany(() => Lab, (lab) => lab.patient)
  labs!: Relation<Lab>[]
}
