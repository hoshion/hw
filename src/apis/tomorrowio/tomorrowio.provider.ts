import { TomorrowIoAdapter } from './tomorrowio.adapter';
import { TomorrowIoHandler } from './tomorrowio.handler';
import { Weather } from '../../weather';
import { Provider } from '../../interfaces/provider.interface';
import { TomorrowIoModel } from './tomorrowio.model';

export class TomorrowIoProvider implements Provider {
  constructor(
    private readonly adapter: TomorrowIoAdapter,
    private readonly handler: TomorrowIoHandler,
  ) {}

  async getWeather(city: string): Promise<Weather> {
    const res: TomorrowIoModel = await this.handler.handle(city);
    if (res == null) return null;
    return this.adapter.adaptee(res);
  }
}
