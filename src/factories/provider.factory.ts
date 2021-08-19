import { Provider } from '../interfaces/provider.interface';
import { WeatherApiFactory } from '../apis/weatherapi/weatherapi.factory';
import { TomorrowIoFactory } from '../apis/tomorrowio/tomorrowio.factory';
import { StormGlassIoFactory } from '../apis/stormglassio/stormglassio.factory';
import { OpenWeatherMapFactory } from '../apis/openweathermap/openweathermap.factory';

export class ProviderFactory {
  getOne(url: string): Provider {
    switch (url) {
      case 'openweathermap.org':
        return new OpenWeatherMapFactory().createProvider();
      case 'weatherapi.com':
        return new WeatherApiFactory().createProvider();
      case 'tomorrow.io':
        return new TomorrowIoFactory().createProvider();
      case 'stormglass.io':
        return new StormGlassIoFactory().createProvider();
      default:
        throw new Error('Provider not found!');
    }
  }
}
