import {Component, OnInit} from '@angular/core';
import {CityWeatherCard} from "../../../models/city-weather-card.model";
import {Store} from "@ngrx/store";
import {State} from "../../../reducers/city-weather.reducer";

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.css']
})
export class CityForecastComponent implements OnInit {
  cityWeatherCard: CityWeatherCard;

  constructor(private store: Store<{ cityWeatherReducer: State }>) { }

  ngOnInit(): void {
    this.store.select('cityWeatherReducer').subscribe(cityWeatherState => {
      this.cityWeatherCard = cityWeatherState.cityWeatherCard;
    })
  }

  toggleFavorite(): void {
    console.log('toggle');
  }
}
