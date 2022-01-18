import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {CityWeatherCard} from '../../models/city-weather-card.model';
import {City} from '../../models/city.model';
import {State} from '../../reducers/city-weather.reducer';
import * as CityForeCastActions from '../../actions/city-forecast.actions';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  items: CityWeatherCard[];
  favouritesSub = new Subscription();

  constructor(private store: Store<{ cityWeatherReducer: State }>) {
  }

  ngOnInit() {
    this.favouritesSub = this.store.select('cityWeatherReducer').subscribe(res => {
      this.items = res.favourites;
    });
  }

  showCity(cityWeatherCard: CityWeatherCard): void {
    const city = new City();
    city.Key = cityWeatherCard.Key;
    city.LocalizedName = cityWeatherCard.CityName;
    this.store.dispatch(new CityForeCastActions.FetchCityForecast(city));
  }

  ngOnDestroy() {
    if (this.favouritesSub) {
      this.favouritesSub.unsubscribe();
    }
  }
}
