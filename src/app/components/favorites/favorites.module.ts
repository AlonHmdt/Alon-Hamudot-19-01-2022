import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {FavoritesComponent} from './favorites.component';
import {AppPipesModule} from '../../pipes/app-pipes.module';

const routes: Routes = [
  {
    path: '',
    component: FavoritesComponent
  }
];

@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppPipesModule
  ],
  providers: [],
})
export class FavoritesModule {
}
