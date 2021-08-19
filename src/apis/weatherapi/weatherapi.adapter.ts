import { Weather } from '../../weather';
import { WeatherApiModel } from './weatherapi.model';
import { Adapter } from '../../interfaces/adapter.interface';

export class WeatherApiAdapter implements Adapter {
  adaptee(data: WeatherApiModel): Weather {
    return new Weather(data.temp_c, data.humidity, data.wind_kph);
  }
}
