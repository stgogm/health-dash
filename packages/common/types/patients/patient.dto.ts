export type PatientSex = 'male' | 'female'
export class PatientDto {
  id!: string
  firstName!: string
  lastName!: string
  sex!: PatientSex
  birthDate!: string
  createdAt!: string
  updatedAt!: string
}
