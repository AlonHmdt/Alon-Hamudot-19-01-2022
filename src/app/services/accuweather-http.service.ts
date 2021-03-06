import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {FetchCityForecastFail, ShowCityForecast} from '../actions/city-forecast.actions';
import * as CityForeCastActions from '../actions/city-forecast.actions';
import {City} from '../models/city.model';
import {CityForecast} from '../models/city-forecast.model';
import {CityCurrentWeather} from '../models/city-current-weather.model';
import {CityWeatherCard} from '../models/city-weather-card.model';
import * as CityForecastActions from '../actions/city-forecast.actions';


@Injectable({
  providedIn: 'root'
})
export class AccuweatherHttpService {
  readonly url = 'https://dataservice.accuweather.com';
  // readonly apiKey = 'kIAOQIguhCOciKN0htm5SlhS1TkCqlXA'; //old key
  readonly apiKey = 'nfaSDROW36aeCGXRfQjOkRY65IEteI8L';

  constructor(private http: HttpClient) {
  }

  search(keyword: string): Observable<City[]> {
    const params = {
      q: keyword,
      apikey: this.apiKey
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
      apikey: this.apiKey
    };

    return this.http.get(this.url + '/currentconditions/v1/' + cityCode,  {params})
      .pipe(
        map((response: any) => {
          const cityCurrentWeather = new CityCurrentWeather();
          cityCurrentWeather.WeatherIcon = response[0].WeatherIcon;
          cityCurrentWeather.WeatherText = response[0].WeatherText;
          cityCurrentWeather.PrecipitationType = response[0].PrecipitationType;
          cityCurrentWeather.Temperature = response[0].Temperature;
          return cityCurrentWeather;
        })
      );
  }

  getCityForecast(cityCode: number): Observable<CityForecast> {

    const params = {
      apikey: this.apiKey,
      metric: 'true',
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

  getCityWeatherCard(cityData: CityForecastActions.FetchCityForecast): Observable<ShowCityForecast | FetchCityForecastFail> {
    return forkJoin(
      {
        currentWeather: this.getCityCurrentWeather(cityData.payload.Key),
        forecastWeather: this.getCityForecast(cityData.payload.Key)
      })
      .pipe(
        map(res => {
          const cityForecast = new CityWeatherCard();
          cityForecast.CityName = cityData.payload.LocalizedName;
          cityForecast.Key = cityData.payload.Key;
          cityForecast.Current = res.currentWeather;
          cityForecast.Forecast = res.forecastWeather;
          return new CityForeCastActions.ShowCityForecast(cityForecast);
        }),
        catchError(error => {
          return of(new CityForeCastActions.FetchCityForecastFail('Something went wrong'));
        })
      );
  }
}
