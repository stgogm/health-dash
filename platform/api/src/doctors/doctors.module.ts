import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { Doctor } from './doctor.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Doctor])],
})
export class DoctorsModule {}
