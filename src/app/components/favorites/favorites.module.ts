import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {FavoritesComponent} from "./favorites.component";
import {CommonModule} from "@angular/common";

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
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class FavoritesModule { }