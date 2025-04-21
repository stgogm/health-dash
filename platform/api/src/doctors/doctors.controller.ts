import { Controller, Get, Query } from '@nestjs/common'

import { DoctorsService } from './doctors.service'
import { Doctor } from './doctor.entity'

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly service: DoctorsService) {}

  @Get()
  getDoctors(
    @Query('take') take: number,
    @Query('skip') skip: number
  ): Promise<Doctor[]> {
    return this.service.getDoctors(take, skip)
  }
}
