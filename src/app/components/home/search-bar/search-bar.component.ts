import {Component, OnInit} from '@angular/core';
import {forkJoin, Observable, Subject} from "rxjs";
import { distinctUntilChanged, switchMap} from "rxjs/operators";
import {AccuweatherHttpService} from "../../../services/accuweather-http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as CityForeCastActions from "../../../actions/city-forecast.actions";
import {City} from "../../../models/city.model";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {


  list = [
    {
      "AdministrativeArea": {"ID": "TA", "LocalizedName": "Tel Aviv"},
      "Country": {ID: "IL", LocalizedName: "Israel"},
      "Key": "215854",
      "LocalizedName": "Tel Aviv",
      "Rank": 31,
      "Type": "City",
      "Version": 1,
    },
    {
      "Version": 1,
      "Key": "178087",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Berlin",
      "Country": {
        "ID": "DE",
        "LocalizedName": "Germany"
      },
      "AdministrativeArea": {
        "ID": "BE",
        "LocalizedName": "Berlin"
      }
    },
    {
      "Version": 1,
      "Key": "2921",
      "Type": "City",
      "Rank": 35,
      "LocalizedName": "Berazategui",
      "Country": {
        "ID": "AR",
        "LocalizedName": "Argentina"
      },
      "AdministrativeArea": {
        "ID": "B",
        "LocalizedName": "Buenos Aires"
      }
    },
    {
      "Version": 1,
      "Key": "312122",
      "Type": "City",
      "Rank": 40,
      "LocalizedName": "Bern",
      "Country": {
        "ID": "CH",
        "LocalizedName": "Switzerland"
      },
      "AdministrativeArea": {
        "ID": "BE",
        "LocalizedName": "Bern"
      }
    },
    {
      "Version": 1,
      "Key": "47786",
      "Type": "City",
      "Rank": 41,
      "LocalizedName": "Bertoua",
      "Country": {
        "ID": "CM",
        "LocalizedName": "Cameroon"
      },
      "AdministrativeArea": {
        "ID": "ES",
        "LocalizedName": "East"
      }
    },
    {
      "Version": 1,
      "Key": "258220",
      "Type": "City",
      "Rank": 41,
      "LocalizedName": "Bergen",
      "Country": {
        "ID": "NO",
        "LocalizedName": "Norway"
      },
      "AdministrativeArea": {
        "ID": "12",
        "LocalizedName": "Hordaland"
      }
    },
    {
      "Version": 1,
      "Key": "170337",
      "Type": "City",
      "Rank": 43,
      "LocalizedName": "Bergisch Gladbach",
      "Country": {
        "ID": "DE",
        "LocalizedName": "Germany"
      },
      "AdministrativeArea": {
        "ID": "NW",
        "LocalizedName": "North Rhine-Westphalia"
      }
    },
    {
      "Version": 1,
      "Key": "289801",
      "Type": "City",
      "Rank": 45,
      "LocalizedName": "Berezniki",
      "Country": {
        "ID": "RU",
        "LocalizedName": "Russia"
      },
      "AdministrativeArea": {
        "ID": "PER",
        "LocalizedName": "Perm'"
      }
    },
    {
      "Version": 1,
      "Key": "318259",
      "Type": "City",
      "Rank": 45,
      "LocalizedName": "Bergama",
      "Country": {
        "ID": "TR",
        "LocalizedName": "Turkey"
      },
      "AdministrativeArea": {
        "ID": "35",
        "LocalizedName": "İzmir"
      }
    },
    {
      "Version": 1,
      "Key": "326524",
      "Type": "City",
      "Rank": 45,
      "LocalizedName": "Berdychiv",
      "Country": {
        "ID": "UA",
        "LocalizedName": "Ukraine"
      },
      "AdministrativeArea": {
        "ID": "18",
        "LocalizedName": "Zhytomyr"
      }
    },
    {
      "Version": 1,
      "Key": "326515",
      "Type": "City",
      "Rank": 45,
      "LocalizedName": "Berdiansk",
      "Country": {
        "ID": "UA",
        "LocalizedName": "Ukraine"
      },
      "AdministrativeArea": {
        "ID": "23",
        "LocalizedName": "Zaporizhzhya"
      }
    }
  ];
  citiesList$: Observable<City[]>;
  subject = new Subject<string>();
  showResults: boolean;
  initialCity: City = {
    Key: 215854,
    LocalizedName: 'Tel Aviv',
  };


  constructor(private accuweatherHttpService: AccuweatherHttpService, private router: Router,
              private route: ActivatedRoute, private store: Store<{cityForecast: City}>) {
  }

  ngOnInit() {
    this.showCityForecast(this.initialCity);

    this.citiesList$ = this.subject.pipe(
      distinctUntilChanged(),
      switchMap(keyword => {
        return this.accuweatherHttpService.search(keyword);
      })
    )
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
    // forkJoin(
    //   {
    //     'currentWeather': this.accuweatherHttpService.getCityCurrentWeather(city.key),
    //     'forecastWeather': this.accuweatherHttpService.getCityForecast(city.key)
    //   }
    // ).subscribe(res => {
    //   const cityForecast = {
    //     'Key': city.key,
    //     'CityName': city.localizedName,
    //     'IsFavourite': false,
    //     'Current': res.currentWeather,
    //     'Forecast': res.forecastWeather
    //   }
    //
    //   this.store.dispatch(new CityForeCastActions.ShowCityForecast(cityForecast));
    // })
    this.store.dispatch(new CityForeCastActions.FetchCityForecast(city));
  }



}
