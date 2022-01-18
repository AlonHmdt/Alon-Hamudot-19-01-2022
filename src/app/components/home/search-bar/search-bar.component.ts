import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {distinctUntilChanged, switchMap} from 'rxjs/operators';
import {AccuweatherHttpService} from '../../../services/accuweather-http.service';
import * as CityForeCastActions from '../../../actions/city-forecast.actions';
import {City} from '../../../models/city.model';
import {State} from '../../../reducers/city-weather.reducer';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {


  citiesList$: Observable<City[]>;
  subject = new Subject<string>();
  showResults: boolean;

  constructor(private accuweatherHttpService: AccuweatherHttpService, private router: Router,
              private route: ActivatedRoute, private store: Store<{ cityWeatherReducer: State }>) {
  }

  ngOnInit() {
    this.citiesList$ = this.subject.pipe(
      distinctUntilChanged(),
      switchMap(keyword => {
        return this.accuweatherHttpService.search(keyword);
      })
    );
  }

  search(keyword: string): void {
    if (!keyword || keyword === '') {
      this.showResults = false;
      return;
    }
    this.showResults = true;
    this.subject.next(keyword);
    return;
  }

  showCityForecast(city: City): void {
    this.store.dispatch(new CityForeCastActions.FetchCityForecast(city));
  }


}
