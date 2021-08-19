import { AbstractProviderFactory } from '../../interfaces/abstract.factory';
import { TomorrowIoAdapter } from './tomorrowio.adapter';
import { TomorrowIoHandler } from './tomorrowio.handler';
import { TomorrowIoProvider } from './tomorrowio.provider';

export class TomorrowIoFactory implements AbstractProviderFactory {
  createAdapter(): TomorrowIoAdapter {
    return new TomorrowIoAdapter();
  }
  createHandler(): TomorrowIoHandler {
    return new TomorrowIoHandler();
  }
  createProvider(): TomorrowIoProvider {
    return new TomorrowIoProvider(this.createAdapter(), this.createHandler());
  }
}
