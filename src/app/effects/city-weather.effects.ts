import {Actions, Effect, ofType} from '@ngrx/effects';
import * as CityForecastActions from '../actions/city-forecast.actions';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {forkJoin, of} from 'rxjs';
import * as CityForeCastActions from '../actions/city-forecast.actions';
import {AccuweatherHttpService} from '../services/accuweather-http.service';
import {Injectable} from '@angular/core';
import {CityWeatherCard} from '../models/city-weather-card.model';

import {Router} from "@angular/router";

@Injectable()
export class CityWeatherEffects {
  @Effect()
  cityForecastFetch$ = this.actions$.pipe(
    ofType(CityForecastActions.FETCH_CITY_FORECAST),
    switchMap((cityData: CityForecastActions.FetchCityForecast) => {
        return forkJoin(
          {
            currentWeather: this.accuweatherHttpService.getCityCurrentWeather(cityData.payload.Key),
            forecastWeather: this.accuweatherHttpService.getCityForecast(cityData.payload.Key)
          })
          .pipe(
            map(res => {
              const cityForecast = new CityWeatherCard();
              cityForecast.CityName = cityData.payload.LocalizedName;
              cityForecast.Key = cityData.payload.Key;
              cityForecast.IsFavourite = false;
              cityForecast.Current = res.currentWeather;
              cityForecast.Forecast = res.forecastWeather;
              return new CityForeCastActions.ShowCityForecast(cityForecast);
            }),
            catchError(error => {
              return of(new CityForeCastActions.FetchCityForecastFail('Something went wrong'));
            })
          );
      }
    ));

  @Effect({dispatch: false})
  showCityForecast = this.actions$.pipe(
    ofType(CityForecastActions.SHOW_CITY_FORECAST),
    tap(() => {
        this.router.navigate(['home', 'forecast']);
      }
    ))

  constructor(private actions$: Actions, private accuweatherHttpService: AccuweatherHttpService, private router: Router) {
  }
}
