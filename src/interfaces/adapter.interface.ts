import { Weather } from 'src/weather';

export interface Adapter {
  adaptee(data): Weather;
}
