import axios from 'axios';
import { RequestHandler } from '../../interfaces/request.handler';
import { SpeedConverter } from '../../services/speed.converter';
import { OpenWeatherMapModel } from './openweathermap.model';

export class OpenWeatherMapHandler implements RequestHandler {
  async handle(city: string): Promise<OpenWeatherMapModel> {
    try {
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`,
      );
      const temp: number = res.data.main.temp;
      const humidity: number = res.data.main.humidity;
      const windSpeed: number = SpeedConverter.fromMpsToKph(
        res.data.wind.speed,
      );
      return new OpenWeatherMapModel(temp, humidity, windSpeed);
    } catch {
      return null;
    }
  }
}
