import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {cityForecastReducer} from "./reducers/city-forecast.reducer";
import {EffectsModule} from '@ngrx/effects';
import {CityForecastEffects} from './effects/city-forecast.effects';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({cityForecast: cityForecastReducer}),
    EffectsModule.forRoot([CityForecastEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
