import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from './reducers/city-weather.reducer';
import {City} from './models/city.model';
import * as CityForeCastActions from './actions/city-forecast.actions';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Weather';
  isDark = false;
  isLoading = false;

  readonly initialCity: City = {
    Key: 215854,
    LocalizedName: 'Tel Aviv',
  };

  constructor(private store: Store<{ cityWeatherReducer: State }>, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.store.dispatch(new CityForeCastActions.FetchCityForecast(this.initialCity));

    this.store.select('cityWeatherReducer').subscribe(state => {
      this.isLoading = state.loading;
      if (state.fetchError) {
        this.showError(state.fetchError);
      }
    });
  }

  showError(message: string) {
    this._snackBar.open(message, 'close', {
      duration: 3000,
    });
  }


  themeToggled(isDark: boolean): void{
    this.isDark = isDark;
  }
}

