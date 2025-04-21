import { Controller, Get, Param, Query } from '@nestjs/common'
import type { UUID } from 'node:crypto'

import { DoctorsService } from './doctors.service'
import type { Doctor } from './doctor.entity'

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly service: DoctorsService) {}

  @Get()
  getDoctors(
    @Query('take') take = 18,
    @Query('skip') skip = 0
  ): Promise<Doctor[]> {
    return this.service.getDoctors(take, skip)
  }

  @Get(':id')
  getDoctor(@Param('id') id: UUID) {
    return this.service.getDoctor(id)
  }
}
