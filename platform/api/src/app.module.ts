import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { AppointmentsModule } from './appointments/appointments.module'
import { PatientsModule } from './patients/patients.module'
import { DoctorsModule } from './doctors/doctors.module'
import { LabsModule } from './labs/labs.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        port: parseInt(config.get('DATABASE_PORT') || '5432'),
        username: config.get('DATABASE_USER'),
        password: config.get('DATABASE_PASS'),
        database: config.get('DATABASE_NAME'),
        host: config.get('DATABASE_HOST'),
        autoLoadEntities: true,
        synchronize: true,
        type: 'postgres',
      }),
    }),
    AppointmentsModule,
    PatientsModule,
    DoctorsModule,
    LabsModule,
  ],
})
export class AppModule {}
