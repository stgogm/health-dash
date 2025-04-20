export type AppointmentStatus = 'scheduled' | 'completed' | 'cancelled'
export type AppointmentsStats = Record<AppointmentStatus, number>
