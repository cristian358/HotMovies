import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',  loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent) },
  {path:'movie/:id',   loadComponent: () => import('./pages/movie-detail-page/movie-detail-page.component').then(m => m.MovieDetailPageComponent) },
  {path:'search/:movie', loadComponent: () => import('./pages/movie-search-page/movie-search-page.component').then(m => m.MovieSearchPageComponent) },
  {path:'', pathMatch:'full', redirectTo:'/home'},
  {path:'**', redirectTo:'/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
