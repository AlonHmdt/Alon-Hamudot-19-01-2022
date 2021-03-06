import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  { path: 'favorites', loadChildren: () => import('./components/favorites/favorites.module').then(m => m.FavoritesModule)},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
