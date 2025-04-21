import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'

import { Doctor } from './doctor.entity'
import { DoctorDto } from '../../../../packages/common/types'

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor) private readonly doctors: Repository<Doctor>
  ) {}

  getDoctors(take = 25, skip = 0): Promise<Doctor[]> {
    return this.doctors.find({
      skip,
      take,
    })
  }
}
