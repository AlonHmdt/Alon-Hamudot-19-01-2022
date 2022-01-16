import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CityWeatherCard} from '../../models/city-weather-card.model';
import {State} from '../../reducers/city-forecast.reducer';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  isLoading: boolean;
  error: string;
  cityWeatherCard: CityWeatherCard;
  constructor(private store: Store<{ cityForecast: State }>) {
  }

  ngOnInit(): void {
    this.subscription = this.store.select('cityForecast').subscribe(cityWeatherCardState => {
      console.log(cityWeatherCardState);
      this.isLoading = cityWeatherCardState.loading;
      this.error = cityWeatherCardState.fetchError;
      this.cityWeatherCard = cityWeatherCardState.cityWeatherCard;
    });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
