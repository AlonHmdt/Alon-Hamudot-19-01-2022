import { Action } from '@ngrx/store';
import {CityWeatherCard} from '../models/city-weather-card.model';
import {City} from '../models/city.model';

export const FETCH_CITY_FORECAST        = 'FETCH_CITY_FORECAST';
export const SHOW_CITY_FORECAST         = 'SHOW_CITY_FORECAST';
export const FETCH_CITY_FORECAST_FAIL   = 'FETCH_CITY_FORECAST_FAIL';
export const ADD_CITY_TO_FAVOURITES     = 'ADD_CITY_TO_FAVOURITES';
export const REMOVE_CITY_FROM_FAVOURITES = 'REMOVE_CITY_FROM_FAVOURITES';
export const SHOW_FAVOURITE             = 'SHOW_FAVOURITE';

export class FetchCityForecast implements Action {
  readonly type = FETCH_CITY_FORECAST;

  constructor(public payload: City) {}
}

export class ShowCityForecast implements Action {
  readonly type = SHOW_CITY_FORECAST;

  constructor(public payload: CityWeatherCard) {}
}

export class FetchCityForecastFail implements Action {
  readonly type = FETCH_CITY_FORECAST_FAIL;

  constructor(public payload: string) {}
}

export class AddCityToFavourites implements Action {
  readonly type = ADD_CITY_TO_FAVOURITES;

  constructor(public payload: CityWeatherCard) {}
}

export class RemoveCityToFavourites implements Action {
  readonly type = REMOVE_CITY_FROM_FAVOURITES;

  constructor(public payload: number) {}
}



export type CityForecastActionsActions =
  ShowCityForecast |
  FetchCityForecast |
  FetchCityForecastFail |
  AddCityToFavourites |
  RemoveCityToFavourites;
