import * as CityForeCastActions from '../actions/city-forecast.actions';
import {CityWeatherCard} from '../models/city-weather-card.model';
import {CityForecastActionsActions} from '../actions/city-forecast.actions';

export interface State {
  favourites: CityWeatherCard[],
  cityWeatherCard: CityWeatherCard;
  fetchError: string;
  loading: boolean;
}

const initialState: State = {
  favourites: [],
  cityWeatherCard: null,
  fetchError: null,
  loading: false
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

