import {Component, OnInit} from '@angular/core';
import {City} from "../../models/city.model";
import * as CityForeCastActions from "../../actions/city-forecast.actions";
import {Store} from "@ngrx/store";
import {State} from "../../reducers/city-weather.reducer";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {

  }

}
