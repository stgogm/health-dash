import type { UUID } from 'node:crypto'

import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'

import { Doctor } from './doctor.entity'

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor) private readonly doctors: Repository<Doctor>
  ) {}

  getDoctors(take = 18, skip = 0): Promise<Doctor[]> {
    return this.doctors.find({
      skip,
      take,
    })
  }

  getDoctor(id: UUID) {
    return this.doctors.findOneBy({ id })
  }
}
