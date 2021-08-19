import { WeatherApiAdapter } from './weatherapi.adapter';
import { WeatherApiHandler } from './weatherapi.handler';
import { Weather } from '../../weather';
import { Provider } from '../../interfaces/provider.interface';
import { WeatherApiModel } from './weatherapi.model';

export class WeatherApiProvider implements Provider {
  constructor(
    private readonly adapter: WeatherApiAdapter,
    private readonly handler: WeatherApiHandler,
  ) {}

  async getWeather(city: string): Promise<Weather> {
    const res: WeatherApiModel = await this.handler.handle(city);
    if (res == null) return null;
    return this.adapter.adaptee(res);
  }
}
