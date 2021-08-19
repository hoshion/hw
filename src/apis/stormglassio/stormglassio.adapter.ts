import { Adapter } from '../../interfaces/adapter.interface';
import { Weather } from '../../weather';
import { StormGlassIoModel } from './stormglassio.model';

export class StormGlassIoAdapter implements Adapter {
  adaptee(data: StormGlassIoModel): Weather {
    return new Weather(data.airTemperature, data.humidity, data.windSpeed);
  }
}
