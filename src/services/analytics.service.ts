import { Injectable } from '@nestjs/common';
import { AnalyticsRepository } from 'src/database/analytics.repository';

@Injectable()
export class AnalyticsService {
  constructor(private readonly repository: AnalyticsRepository) {}

  increaseAmountOfRequests(cityName: string) {
    if (!this.repository.EXISTS(cityName)) this.repository.INSERT(cityName);
    else this.repository.INCREASE_BY_ONE(cityName);
  }
}
