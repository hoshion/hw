import axios from 'axios';
import { Coordinates } from '../../coordinates';
import { RequestHandler } from '../../interfaces/request.handler';
import { GeolocationService } from '../../services/geolocation.service';
import { SpeedConverter } from '../../services/speed.converter';
import { StormGlassIoModel } from './stormglassio.model';

export class StormGlassIoHandler implements RequestHandler {
  async handle(city: string): Promise<StormGlassIoModel> {
    try {
      const coord: Coordinates = await GeolocationService.getCoordinates(city);
      const res = await axios.get(
        `https://api.stormglass.io/v2/weather/point?lat=${coord.latitude}&lng=${coord.longitude}&params=airTemperature%2Chumidity%2CwindSpeed`,
        {
          headers: {
            Authorization: process.env.STORMGLASSIO_API_KEY,
          },
        },
      );
      const body = res.data.hours[0];
      const airTemperature: number = body.airTemperature.noaa;
      const windSpeed: number = SpeedConverter.fromMpsToKph(
        body.windSpeed.noaa,
      );
      const humidity: number = body.humidity.noaa;
      return new StormGlassIoModel(airTemperature, windSpeed, humidity);
    } catch {
      return null;
    }
  }
}
