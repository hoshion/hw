import { Injectable } from '@nestjs/common';
import { promises } from 'fs';
import { Database } from 'src/interfaces/database.interface';
import { CityAnalytics } from './city.analytics';

@Injectable()
export class AnalyticsRepository implements Database {
  private analytics: CityAnalytics[];

  constructor() {
    promises
      .readFile('analytics.json', 'utf-8')
      .then(
        (analyticsJSON) =>
          (this.analytics = JSON.parse(analyticsJSON).analytics)
      );
  }

  async INSERT(city: string) {
    this.analytics.push(new CityAnalytics(city, 1));
    await this.SAVE_TABLE();
  }

  async INCREASE_BY_ONE(cityName: string) {
    this.SELECT(cityName).amount += 1;
    await this.SAVE_TABLE();
  }

  EXISTS(cityName: string): boolean {
    return this.analytics.some((city) => city.name === cityName);
  }

  async SAVE_TABLE() {
    const analytics: CityAnalytics[] = this.analytics;
    await promises.writeFile('analytics.json', JSON.stringify({ analytics }));
  }

  SELECT(cityName: string) {
    return this.analytics.find((city) => city.name === cityName);
  }
}
