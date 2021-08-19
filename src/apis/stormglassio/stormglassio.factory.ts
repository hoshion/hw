import { AbstractProviderFactory } from '../../interfaces/abstract.factory';
import { StormGlassIoAdapter } from './stormglassio.adapter';
import { StormGlassIoHandler } from './stormglassio.handler';
import { StormGlassIoProvider } from './stormglassio.provider';

export class StormGlassIoFactory implements AbstractProviderFactory {
  createAdapter(): StormGlassIoAdapter {
    return new StormGlassIoAdapter();
  }
  createHandler(): StormGlassIoHandler {
    return new StormGlassIoHandler();
  }
  createProvider(): StormGlassIoProvider {
    return new StormGlassIoProvider(this.createAdapter(), this.createHandler());
  }
}
