import { Injectable } from '@nestjs/common';
import { ChainOfRespobsibility } from 'src/chain.of.responsibility';

@Injectable()
export class WeatherService {
  constructor(private readonly chain: ChainOfRespobsibility) {}

  getOne(city: string) {
    return this.chain.start(city);
  }
}
