import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { Lab } from './lab.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Lab])],
})
export class LabsModule {}
