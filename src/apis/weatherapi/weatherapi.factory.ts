import { WeatherApiAdapter } from './weatherapi.adapter';
import { WeatherApiProvider } from './weatherapi.provider';
import { WeatherApiHandler } from './weatherapi.handler';
import { AbstractProviderFactory } from '../../interfaces/abstract.factory';

export class WeatherApiFactory implements AbstractProviderFactory {
  createAdapter(): WeatherApiAdapter {
    return new WeatherApiAdapter();
  }
  createHandler(): WeatherApiHandler {
    return new WeatherApiHandler();
  }
  createProvider(): WeatherApiProvider {
    return new WeatherApiProvider(this.createAdapter(), this.createHandler());
  }
}
