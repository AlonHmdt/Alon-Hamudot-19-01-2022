import * as CityForeCastActions from '../actions/city-forecast.actions';
import {CityWeatherCard} from '../models/city-weather-card.model';
import {CityForecastActionsActions} from '../actions/city-forecast.actions';


export interface State {
  cityWeatherCard: CityWeatherCard;
  fetchError: string;
  loading: boolean;
}

const initialState: State = {
  cityWeatherCard: new CityWeatherCard(),
  fetchError: null,
  loading: false
};


export function cityForecastReducer(
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
    default:
      return state;
  }
}

