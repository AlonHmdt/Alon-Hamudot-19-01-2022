import {Component, OnDestroy, OnInit} from '@angular/core';
import {City} from "../../models/city.model";
import * as CityForeCastActions from "../../actions/city-forecast.actions";
import {Store} from "@ngrx/store";
import {State} from "../../reducers/city-weather.reducer";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  initialCity: City = {
    Key: 215854,
    LocalizedName: 'Tel Aviv',
  };


  constructor(private store: Store<{ cityWeatherReducer: State }>) {
  }

  ngOnInit(): void {
    console.log('s');
    this.store.dispatch(new CityForeCastActions.FetchCityForecast(this.initialCity));

  }


  ngOnDestroy() {
  }
}
