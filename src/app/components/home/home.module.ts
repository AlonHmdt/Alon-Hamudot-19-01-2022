import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';

import {HomeComponent} from './home.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {CityForecastComponent} from './city-forecast/city-forecast.component';

import {AccuweatherHttpService} from '../../services/accuweather-http.service';
import {AppPipesModule} from '../../pipes/app-pipes.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'forecast',
        component: CityForecastComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    SearchBarComponent,
    CityForecastComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCardModule,
    AppPipesModule
  ],
  providers: [
    AccuweatherHttpService
  ]
})
export class HomeModule {
}
