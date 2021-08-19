import axios from 'axios';
import { Coordinates } from '../../coordinates';
import { GeolocationService } from '../../services/geolocation.service';
import { RequestHandler } from '../../interfaces/request.handler';
import { SpeedConverter } from '../../services/speed.converter';
import { TomorrowIoModel } from './tomorrowio.model';

export class TomorrowIoHandler implements RequestHandler {
  async handle(city: string): Promise<TomorrowIoModel> {
    try {
      const coord: Coordinates = await GeolocationService.getCoordinates(city);
      const res = await axios.get(
        `https://api.tomorrow.io/v4/timelines?location=${coord.latitude}%2C${coord.longitude}&fields=temperature%2CwindSpeed%2Chumidity&timesteps=current&apikey=${process.env.TOMORROWIO_API_KEY}`,
      );
      const values = res.data.data.timelines[0].intervals[0].values;
      const temperature: number = values.temperature;
      const windSpeed: number = SpeedConverter.fromMpsToKph(values.windSpeed);
      const humidity: number = values.humidity;
      return new TomorrowIoModel(temperature, windSpeed, humidity);
    } catch {
      return null;
    }
  }
}
