import { Adapter } from 'src/interfaces/adapter.interface';
import { Provider } from 'src/interfaces/provider.interface';
import { RequestHandler } from 'src/interfaces/request.handler';

export interface AbstractProviderFactory {
  createAdapter(): Adapter;
  createHandler(): RequestHandler;
  createProvider(): Provider;
}
