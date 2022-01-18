import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {CityWeatherCard} from '../../../models/city-weather-card.model';
import {State} from '../../../reducers/city-weather.reducer';
import * as CityForeCastActions from '../../../actions/city-forecast.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss']
})
export class CityForecastComponent implements OnInit, OnDestroy {
  cityWeatherCard: CityWeatherCard;
  cityWeatherCardSub = new Subscription();
  isFav: boolean;

  constructor(private store: Store<{ cityWeatherReducer: State }>, private router: Router) {
  }

  ngOnInit(): void {
    this.cityWeatherCardSub = this.store.select('cityWeatherReducer').subscribe(cityWeatherState => {
      if (!cityWeatherState.cityWeatherCard) {
        this.router.navigate(['home']);
      }
      this.cityWeatherCard = cityWeatherState.cityWeatherCard;
      this.isFav = cityWeatherState.favourites.some(item => this.cityWeatherCard.Key === item.Key);
    });
  }

  toggleFavorite(): void {
    if (!this.isFav) {
      this.store.dispatch(new CityForeCastActions.AddCityToFavourites(this.cityWeatherCard));
      return;
    }
    this.store.dispatch(new CityForeCastActions.RemoveCityToFavourites(this.cityWeatherCard.Key));
  }

  ngOnDestroy() {
    this.cityWeatherCardSub.unsubscribe();
  }
}
