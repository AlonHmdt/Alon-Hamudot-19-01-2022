import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from './reducers/city-weather.reducer';
import {City} from './models/city.model';
import * as CityForeCastActions from './actions/city-forecast.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Weather';
  isDark = false;
  readonly initialCity: City = {
    Key: 215854,
    LocalizedName: 'Tel Aviv',
  };

  constructor(private store: Store<{ cityWeatherReducer: State }>) {
  }

  ngOnInit() {
    this.store.dispatch(new CityForeCastActions.FetchCityForecast(this.initialCity));
  }

  themeToggled(isDark: boolean): void{
    this.isDark = isDark;
  }
}

