import { Injectable } from '@nestjs/common';
import { LoggerFactory } from 'src/factories/logger.factory';
import { Logger } from 'src/interfaces/logger.interface';
import config from '../config';

@Injectable()
export class LoggerService {
  logger: Logger;

  constructor() {
    this.logger = new LoggerFactory().getOne(config.logType);
  }

  log(city: string): void {
    this.logger.log(city);
  }
}
