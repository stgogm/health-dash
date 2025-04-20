import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { DashboardController } from './dashboard.controller'
import { DashboardService } from './dashboard.service'

import { Appointment } from '../appointments/appointment.entity'
import { Patient } from '../patients/patient.entity'
import { Doctor } from '../doctors/doctor.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Patient, Doctor, Appointment])],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
