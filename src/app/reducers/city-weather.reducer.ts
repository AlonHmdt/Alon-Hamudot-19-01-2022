import * as CityForeCastActions from '../actions/city-forecast.actions';
import {CityWeatherCard} from '../models/city-weather-card.model';
import {CityForecastActionsActions} from '../actions/city-forecast.actions';

export interface State {
  favourites: CityWeatherCard[];
  cityWeatherCard: CityWeatherCard;
  fetchError: string;
  loading: boolean;
  unit: 'metric' | 'imperial';
}

const initialState: State = {
  favourites: [
    {CityName: 'Tel-Aviv', Key: 1, Current: {Temperature: {Metric: 15},  PrecipitationType: 'r', WeatherIcon: '2', WeatherText: 'asdasd'}, Forecast: null},
    {CityName: 'Berlin', Key: 1, Current: {Temperature: {Metric: 12},  PrecipitationType: 'r', WeatherIcon: '2', WeatherText: 'asdasd'}, Forecast: null},
    {CityName: 'Ramat-Gan', Key: 1, Current: {Temperature: {Metric: 8},  PrecipitationType: 'r', WeatherIcon: '2', WeatherText: 'asdasd'}, Forecast: null},
    {CityName: 'Haifa', Key: 1, Current: {Temperature: {Metric: 18},  PrecipitationType: 'r', WeatherIcon: '2', WeatherText: 'asdasd'}, Forecast: null},
    {CityName: 'Tel-Aviv', Key: 1, Current: {Temperature: {Metric: 0},  PrecipitationType: 'r', WeatherIcon: '2', WeatherText: 'asdasd'}, Forecast: null},
    {CityName: 'Jerusalem', Key: 1, Current: {Temperature: {Metric: 35},  PrecipitationType: 'r', WeatherIcon: '2', WeatherText: 'asdasd'}, Forecast: null},
    {CityName: 'Akko', Key: 1, Current: {Temperature: {Metric: 15},  PrecipitationType: 'r', WeatherIcon: '2', WeatherText: 'asdasd'}, Forecast: null},
    {CityName: 'London', Key: 1, Current: {Temperature: {Metric: 22},  PrecipitationType: 'r', WeatherIcon: '2', WeatherText: 'asdasd'}, Forecast: null},
    {CityName: 'Ramat-Hasharon', Key: 1, Current: {Temperature: {Metric: 15},  PrecipitationType: 'r', WeatherIcon: '2', WeatherText: 'asdasd'}, Forecast: null},
    {CityName: 'Ashdod', Key: 1, Current: {Temperature: {Metric: 32},  PrecipitationType: 'r', WeatherIcon: '2', WeatherText: 'asdasd'}, Forecast: null},
    {CityName: 'Beer Sheva', Key: 1, Current: {Temperature: {Metric: 15},  PrecipitationType: 'r', WeatherIcon: '2', WeatherText: 'asdasd'}, Forecast: null},

  ],
  cityWeatherCard: null,
  fetchError: null,
  loading: false,
  unit: 'metric'
};


export function cityWeatherReducer(
  state: State = initialState,
  action: CityForecastActionsActions
) {
    switch (action.type) {
    case CityForeCastActions.SHOW_CITY_FORECAST:
      return {...state, cityWeatherCard: action.payload, loading: false};
    case CityForeCastActions.FETCH_CITY_FORECAST:
      return {...state, fetchError: null, loading: true};
    case CityForeCastActions.FETCH_CITY_FORECAST_FAIL:
      return {...state, cityWeatherCard: null, fetchError: action.payload, loading: true};
    case CityForeCastActions.ADD_CITY_TO_FAVOURITES:
      return {...state, favourites: [...state.favourites, action.payload]};
    case CityForeCastActions.REMOVE_CITY_FROM_FAVOURITES:
      const filtered = [...state.favourites].filter(item => item.Key !== action.payload);
      return {...state, favourites: filtered};
    default:
      return state;
  }
}

