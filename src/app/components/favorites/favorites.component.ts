import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../reducers/city-weather.reducer";
import {CityWeatherCard} from "../../models/city-weather-card.model";
import * as CityForeCastActions from "../../actions/city-forecast.actions";
import {City} from "../../models/city.model";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  items: CityWeatherCard[];

  constructor(private store: Store<{ cityWeatherReducer: State }>) {
  }

  ngOnInit() {
    this.store.select('cityWeatherReducer').subscribe(res => {
      this.items = res.favourites;
    })
  }

  showCity(cityWeatherCard: CityWeatherCard): void {
    const city = new City();
    city.Key = cityWeatherCard.Key;
    city.LocalizedName = cityWeatherCard.CityName;
    this.store.dispatch(new CityForeCastActions.FetchCityForecast(city));
  }
}
