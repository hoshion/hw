import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { AnalyticsService } from 'src/services/analytics.service';
import { LoggerService } from 'src/services/logger.service';
import { Weather } from 'src/weather';
import { WeatherService } from '../services/weather.service';

@Controller('weather')
export class WeatherController {
  constructor(
    private readonly weatherService: WeatherService,
    private readonly analyticsService: AnalyticsService,
    private readonly loggerService: LoggerService,
  ) {}

  @Get(':city')
  async getOne(@Param() params) {
    const weather: Weather = await this.weatherService.getOne(params.city);
    if (weather != null) {
      this.analyticsService.increaseAmountOfRequests(params.city);
      this.loggerService.log(params.city);
      return weather;
    }

    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }
}
