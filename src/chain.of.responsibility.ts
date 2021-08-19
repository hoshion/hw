import { Injectable } from '@nestjs/common';
import { ContainterManager } from './container.manager';
import { Container } from './container';
import { Weather } from './weather';

@Injectable()
export class ChainOfRespobsibility {
  mainProvider: Container;

  constructor(private readonly configManager: ContainterManager) {
    this.configManager.secondProvider.setNext(this.configManager.thirdProvider);

    this.mainProvider = this.configManager.firstProvider;
    this.mainProvider.setNext(this.configManager.secondProvider);
  }

  async start(city: string): Promise<Weather> {
    return await this.mainProvider.next(city);
  }
}
