import { Module } from '@nestjs/common';
import { WeatherController } from './controllers/weather.controller';
import { WeatherService } from './services/weather.service';
import { ChainOfRespobsibility } from './chain.of.responsibility';
import { AnalyticsService } from './services/analytics.service';
import { AnalyticsRepository } from './database/analytics.repository';
import { ContainterManager } from './container.manager';
import { LoggerService } from './services/logger.service';

@Module({
  imports: [],
  controllers: [WeatherController],
  providers: [
    WeatherService,
    ChainOfRespobsibility,
    AnalyticsService,
    AnalyticsRepository,
    ContainterManager,
    LoggerService,
  ],
})
export class AppModule {}
