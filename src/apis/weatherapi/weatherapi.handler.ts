import axios from 'axios';
import { WeatherApiModel } from './weatherapi.model';
import { RequestHandler } from '../../interfaces/request.handler';

export class WeatherApiHandler implements RequestHandler {
  async handle(city: string) {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`,
      );
      return new WeatherApiModel(
        response.data.current.temp_c,
        response.data.current.humidity,
        response.data.current.wind_kph,
      );
    } catch {
      return null;
    }
  }
}
