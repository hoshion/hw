import { Logger } from '../interfaces/logger.interface';
import { promises } from 'fs';

export class FileLogger implements Logger {
  log(city: string): void {
    promises.appendFile(
      'latest.log',
      new Date().toISOString() + ': ' + city + '\n',
    );
  }
}
