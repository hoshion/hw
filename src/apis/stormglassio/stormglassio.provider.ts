import { Weather } from '../../weather';
import { Provider } from '../../interfaces/provider.interface';
import { StormGlassIoAdapter } from './stormglassio.adapter';
import { StormGlassIoHandler } from './stormglassio.handler';
import { StormGlassIoModel } from './stormglassio.model';

export class StormGlassIoProvider implements Provider {
  constructor(
    private readonly adapter: StormGlassIoAdapter,
    private readonly handler: StormGlassIoHandler,
  ) {}

  async getWeather(city: string): Promise<Weather> {
    const res: StormGlassIoModel = await this.handler.handle(city);
    if (res == null) return null;
    return this.adapter.adaptee(res);
  }
}
