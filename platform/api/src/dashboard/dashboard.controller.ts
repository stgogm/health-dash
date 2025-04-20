import { DashboardSummaryDto } from '@common/types'
import { Controller, Get } from '@nestjs/common'

import { DashboardService } from './dashboard.service'

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  async getDashboard(): Promise<DashboardSummaryDto> {
    return this.dashboardService.getSummary()
  }
}
