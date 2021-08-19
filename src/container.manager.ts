import { Injectable } from '@nestjs/common';
import config from './config';
import { Container } from './container';
import { ProviderFactory } from './factories/provider.factory';

@Injectable()
export class ContainterManager {
  firstProvider: Container;
  secondProvider: Container;
  thirdProvider: Container;

  constructor() {
    const factory: ProviderFactory = new ProviderFactory();

    this.firstProvider = new Container(factory.getOne(config.mainProvider));
    this.secondProvider = new Container(factory.getOne(config.secondProvider));
    this.thirdProvider = new Container(factory.getOne(config.thirdProvider));
  }
}
