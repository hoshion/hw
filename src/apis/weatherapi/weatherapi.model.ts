export class WeatherApiModel {
  constructor(
    readonly temp_c: number,
    readonly humidity: number,
    readonly wind_kph: number,
  ) {}
}
