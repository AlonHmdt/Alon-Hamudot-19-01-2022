import {CityCurrentWeather} from "./city-current-weather.model";
import {CityForecast} from "./city-forecast.model";


export class CityWeatherCard {
  CityName: string;
  Key: number;
  Current: CityCurrentWeather;
  Forecast: CityForecast;
  IsFavourite: boolean;
}
