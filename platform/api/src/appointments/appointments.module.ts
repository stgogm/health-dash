import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { Appointment } from './appointment.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Appointment])],
})
export class AppointmentsModule {}
