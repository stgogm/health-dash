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

  async getDoctor(id: UUID) {
    const [result] = await this.doctors.query(
      `
      SELECT d.*, COUNT(DISTINCT p.id) AS patients, COUNT(DISTINCT a.id) AS appointments
      FROM doctors d
      LEFT JOIN appointments a ON a."doctorId" = d.id
      LEFT JOIN patients p ON p.id = a."patientId"
      WHERE d.id = $1
      GROUP BY d.id;
      `,
      [id]
    )

    return result
  }
}
