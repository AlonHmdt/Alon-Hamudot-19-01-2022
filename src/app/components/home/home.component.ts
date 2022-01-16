import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CityWeatherCard} from "../../models/city-weather-card.model";
import {State} from "../../reducers/city-forecast.reducer";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading: boolean;
  error: string;
  cityWeatherCard: CityWeatherCard;

  constructor(private store: Store<{ cityWeatherCardState: State }>) {
  }

  ngOnInit(): void {
    this.store.select('cityWeatherCardState').subscribe(cityWeatherCardState => {
      console.log(cityWeatherCardState);
      // this.isLoading = cityWeatherCardState.loading;
      // this.error = cityWeatherCardState.fetchError;
      // this.cityWeatherCard = cityWeatherCardState.cityWeatherCard;
    })
  }

  getCityForecastData(): void {

  }

}
