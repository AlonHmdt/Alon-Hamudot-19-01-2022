import {Component, Input, OnInit} from '@angular/core';
import {CityWeatherCard} from "../../../models/city-weather-card.model";

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.css']
})
export class CityForecastComponent implements OnInit {
  // @Input() cityForecast: CityWeatherCard = {
  //   'Key': 215854,
  //   'CityName': 'Tel Aviv',
  //   'IsFavourite': false,
  //   'Current':   {
  //     "WeatherIcon": "01",
  //     "WeatherText": "A shower",
  //     "PrecipitationType": "Rain",
  //     "Temperature": {
  //       "Metric": {
  //         "Value": 14.3,
  //         "Unit": "C",
  //         "UnitType": 17
  //       },
  //       "Imperial": {
  //         "Value": 58,
  //         "Unit": "F",
  //         "UnitType": 18
  //       }
  //     }
  //   },
  //   'Forecast': {
  //     "Headline": {
  //       "EffectiveDate": "2022-01-15T01:00:00+02:00",
  //       "EffectiveEpochDate": 1642201200,
  //       "Severity": 3,
  //       "Text": "Expect rainy weather late Friday night through Sunday morning",
  //       "Category": "rain",
  //       "EndDate": "2022-01-16T13:00:00+02:00",
  //       "EndEpochDate": 1642330800,
  //       "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
  //       "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
  //     },
  //     "DailyForecasts": [
  //       {
  //         "Date": "2022-01-14T07:00:00+02:00",
  //         "Temperature": {
  //           "Minimum": {
  //             "Value": 9.9,
  //             "Unit": "C",
  //             "UnitType": 17
  //           },
  //           "Maximum": {
  //             "Value": 15.5,
  //             "Unit": "C",
  //             "UnitType": 17
  //           }
  //         }
  //       },
  //       {
  //         "Date": "2022-01-15T07:00:00+02:00",
  //         "Temperature": {
  //           "Minimum": {
  //             "Value": 11.1,
  //             "Unit": "C",
  //             "UnitType": 17
  //           },
  //           "Maximum": {
  //             "Value": 14.7,
  //             "Unit": "C",
  //             "UnitType": 17
  //           }
  //         }
  //       },
  //       {
  //         "Date": "2022-01-16T07:00:00+02:00",
  //         "Temperature": {
  //           "Minimum": {
  //             "Value": 3.6,
  //             "Unit": "C",
  //             "UnitType": 17
  //           },
  //           "Maximum": {
  //             "Value": 14.8,
  //             "Unit": "C",
  //             "UnitType": 17
  //           }
  //         },
  //       },
  //       {
  //         "Date": "2022-01-17T07:00:00+02:00",
  //         "Temperature": {
  //           "Minimum": {
  //             "Value": 5.5,
  //             "Unit": "C",
  //             "UnitType": 17
  //           },
  //           "Maximum": {
  //             "Value": 13.6,
  //             "Unit": "C",
  //             "UnitType": 17
  //           }
  //         },
  //       },
  //       {
  //         "Date": "2022-01-18T07:00:00+02:00",
  //         "Temperature": {
  //           "Minimum": {
  //             "Value": 9.4,
  //             "Unit": "C",
  //             "UnitType": 17
  //           },
  //           "Maximum": {
  //             "Value": 15.5,
  //             "Unit": "C",
  //             "UnitType": 17
  //           }
  //         },
  //       }
  //     ]
  //   }
  // }

  @Input() cityForecast: CityWeatherCard;
  constructor() { }

  ngOnInit(): void {
    console.log(this.cityForecast);
  }

}
