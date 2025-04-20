import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { Patient } from './patient.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
})
export class PatientsModule {}
