import { Logger } from '../interfaces/logger.interface';

export class StdoutLogger implements Logger {
  log(city: string): void {
    console.log(new Date().toISOString() + ': ' + city);
  }
}
