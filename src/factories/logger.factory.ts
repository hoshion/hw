import { FileLogger } from 'src/logger/file.logger';
import { Logger } from 'src/interfaces/logger.interface';
import { StdoutLogger } from 'src/logger/stdout.logger';

export class LoggerFactory {
  getOne(type: string): Logger {
    switch (type) {
      case 'file':
        return new FileLogger();
      case 'stdout':
        return new StdoutLogger();
      default:
        throw new Error('Logger type not found!');
    }
  }
}
