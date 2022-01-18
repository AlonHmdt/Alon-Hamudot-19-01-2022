import {Component, OnInit} from '@angular/core';
import {CityWeatherCard} from '../../../models/city-weather-card.model';
import {Store} from '@ngrx/store';
import {State} from '../../../reducers/city-weather.reducer';
import * as CityForeCastActions from '../../../actions/city-forecast.actions';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.css']
})
export class CityForecastComponent implements OnInit {
  cityWeatherCard: CityWeatherCard;
  isFav: boolean;

  constructor(private store: Store<{ cityWeatherReducer: State }>) { }

  ngOnInit(): void {
    this.store.select('cityWeatherReducer').subscribe(cityWeatherState => { //// create subsciption
      this.cityWeatherCard = cityWeatherState.cityWeatherCard;
      this.isFav = cityWeatherState.favourites.some(item => this.cityWeatherCard.Key === item.Key);
    })

  }

  toggleFavorite(): void {
    if (!this.isFav) {
      this.store.dispatch(new CityForeCastActions.AddCityToFavourites(this.cityWeatherCard));
      return;
    }
    this.store.dispatch(new CityForeCastActions.RemoveCityToFavourites(this.cityWeatherCard.Key));
  }
}
