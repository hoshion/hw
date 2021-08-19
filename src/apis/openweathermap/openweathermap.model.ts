export class OpenWeatherMapModel {
  constructor(
    readonly temp: number,
    readonly humidity: number,
    readonly windSpeed: number,
  ) {}
}
