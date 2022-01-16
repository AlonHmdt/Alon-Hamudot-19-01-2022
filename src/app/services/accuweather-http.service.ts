import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {City} from "../models/city.model";
import {CityForecast} from "../models/city-forecast.model";
import {CityCurrentWeather} from "../models/city-current-weather.model";

@Injectable({
  providedIn: 'root'
})
export class AccuweatherHttpService {
  readonly url = 'http://dataservice.accuweather.com';
  readonly apiKey = 'kIAOQIguhCOciKN0htm5SlhS1TkCqlXA';
  constructor(private http: HttpClient) { }

  search(keyword: string): Observable <City[]> {
    const params = {
      'q': keyword,
      'apikey': this.apiKey
    };

    return this.http.get(this.url + '/locations/v1/cities/autocomplete', {params})
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  getCityCurrentWeather(cityCode: number): Observable<CityCurrentWeather> {
    const params = {
      'apikey': this.apiKey
    };

    return this.http.get(this.url + '/currentconditions/v1/' + cityCode, {params})
      .pipe(
        map((response: any) => {
          const cityCurrentWeather = new CityCurrentWeather();
          cityCurrentWeather.WeatherIcon = response[0].WeatherIcon;
          cityCurrentWeather.WeatherText = response[0].WeatherText;
          cityCurrentWeather.PrecipitationType = response[0].PrecipitationType;
          cityCurrentWeather.Temperature = response[0].temperature;
          return cityCurrentWeather;
        })
      );
  }

  getCityForecast(cityCode: number): Observable<CityForecast> {

    const params = {
      'apikey': this.apiKey,
      'metric': 'true'
    };

    return this.http.get(this.url + '/forecasts/v1/daily/5day/' + cityCode, {params})
      .pipe(
        map((response: any) => {
          const cityForecast = new CityForecast();
          cityForecast.Headline = response.Headline;
          cityForecast.DailyForecasts = response.DailyForecasts;
          return response;
        })
      );
  }
}
