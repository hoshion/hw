import { Weather } from 'src/weather';

export interface Provider {
  getWeather(city: string): Promise<Weather>;
}
