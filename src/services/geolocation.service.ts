import axios from 'axios';
import { Coordinates } from 'src/coordinates';

export class GeolocationService {
  static async getCoordinates(city: string): Promise<Coordinates> {
    try {
      const res = await axios.get(
        `https://geocode.xyz/${city}?auth=${process.env.GEOCODE_API_KEY}&json=1`,
      );
      return new Coordinates(res.data.latt, res.data.longt);
    } catch (err) {
      throw new Error('Not Found');
    }
  }
}
