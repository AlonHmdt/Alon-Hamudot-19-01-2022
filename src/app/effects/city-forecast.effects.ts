import {Actions, Effect, ofType} from '@ngrx/effects';
import * as CityForecastActions from '../actions/city-forecast.actions';
import {catchError, map, switchMap} from "rxjs/operators";
import {forkJoin, of} from "rxjs";
import * as CityForeCastActions from "../actions/city-forecast.actions";
import {AccuweatherHttpService} from "../services/accuweather-http.service";
import {Injectable} from "@angular/core";
import {CityWeatherCard} from "../models/city-weather-card.model";
import {CityCurrentWeather} from "../models/city-current-weather.model";
import {CityForecast} from "../models/city-forecast.model";

@Injectable()
export class CityForecastEffects {
  @Effect()
  cityForecastFetch$ = this.actions$.pipe(
    ofType(CityForecastActions.FETCH_CITY_FORECAST),
    switchMap((cityData: CityForecastActions.FetchCityForecast) => {
        return forkJoin(
          {
            // 'currentWeather': this.accuweatherHttpService.getCityCurrentWeather(cityData.payload.Key),
            // 'forecastWeather': this.accuweatherHttpService.getCityForecast(cityData.payload.Key)
            'currentWeather': new CityCurrentWeather(),
            'forecastWeather': new CityForecast()
          })
          .pipe(
            map(res => {
              const cityForecast = new CityWeatherCard();
              cityForecast.CityName = cityData.payload.LocalizedName;
              cityForecast.Key = cityData.payload.Key;
              cityForecast.IsFavourite = false;
              cityForecast.Current = res.currentWeather;
              cityForecast.Forecast = res.forecastWeather;
              console.log(cityForecast);
              return of(new CityForeCastActions.ShowCityForecast(cityForecast));
            }),
            catchError(error => {
              return of()
            })
          )
      }
    ))


  constructor(private actions$: Actions, private accuweatherHttpService: AccuweatherHttpService) {
  }
}