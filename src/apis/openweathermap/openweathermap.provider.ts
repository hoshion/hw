import { Weather } from '../../weather';
import { Provider } from '../../interfaces/provider.interface';
import { OpenWeatherMapAdapter } from './openweathermap.adapter';
import { OpenWeatherMapHandler } from './openweathermap.handler';
import { OpenWeatherMapModel } from './openweathermap.model';

export class OpenWeatherMapProvider implements Provider {
  constructor(
    private readonly adapter: OpenWeatherMapAdapter,
    private readonly handler: OpenWeatherMapHandler,
  ) {}

  async getWeather(city: string): Promise<Weather> {
    const res: OpenWeatherMapModel = await this.handler.handle(city);
    if (res == null) return null;
    return this.adapter.adaptee(res);
  }
}
