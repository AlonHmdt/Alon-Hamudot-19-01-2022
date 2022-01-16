import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from './home.component';
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {CityForecastComponent} from "./city-forecast/city-forecast.component";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatIconModule} from "@angular/material/icon";
import {AccuweatherHttpService} from "../../services/accuweather-http.service";
import {MatCardModule} from "@angular/material/card";
import {ZeroPadPipe} from "../../pipes/zero-pad.pipe";
import {UnitSignPipe} from "../../pipes/unit-sign.pipe";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    SearchBarComponent,
    CityForecastComponent,
    ZeroPadPipe,
    UnitSignPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    AccuweatherHttpService
  ],
})
export class HomeModule {
}
