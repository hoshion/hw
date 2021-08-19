import { Provider } from 'src/interfaces/provider.interface';
import { Weather } from 'src/weather';

export class Container {
  node: Container;

  constructor(private readonly provider: Provider) {}

  setNext(child: Container) {
    this.node = child;
  }

  async next(city: string): Promise<Weather> {
    const res: Weather = await this.provider.getWeather(city);

    if (res == null) {
      if (this.node == null) return null;
      return this.node.next(city);
    }

    return res;
  }
}
