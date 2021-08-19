import { AbstractProviderFactory } from '../../interfaces/abstract.factory';
import { Provider } from '../../interfaces/provider.interface';
import { OpenWeatherMapAdapter } from './openweathermap.adapter';
import { OpenWeatherMapHandler } from './openweathermap.handler';
import { OpenWeatherMapProvider } from './openweathermap.provider';

export class OpenWeatherMapFactory implements AbstractProviderFactory {
  createAdapter(): OpenWeatherMapAdapter {
    return new OpenWeatherMapAdapter();
  }
  createHandler(): OpenWeatherMapHandler {
    return new OpenWeatherMapHandler();
  }
  createProvider(): Provider {
    return new OpenWeatherMapProvider(
      this.createAdapter(),
      this.createHandler(),
    );
  }
}
