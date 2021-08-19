import { Weather } from '../../weather';
import { Adapter } from '../../interfaces/adapter.interface';
import { TomorrowIoModel } from './tomorrowio.model';

export class TomorrowIoAdapter implements Adapter {
  adaptee(data: TomorrowIoModel): Weather {
    return new Weather(data.temperature, data.humidity, data.windSpeed);
  }
}
