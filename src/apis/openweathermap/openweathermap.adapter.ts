import { Adapter } from '../../interfaces/adapter.interface';
import { Weather } from '../../weather';
import { OpenWeatherMapModel } from './openweathermap.model';

export class OpenWeatherMapAdapter implements Adapter {
  adaptee(data: OpenWeatherMapModel): Weather {
    return new Weather(data.temp, data.humidity, data.windSpeed);
  }
}
