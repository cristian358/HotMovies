import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit,OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { MovieService } from '../../services/movieService.service';
import { Movie } from '../../models/movieModel.interface';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';

import { Observable, of, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { SvgIconComponent } from '../../components/shared/svg-icon-manage/svg-icon.component';
import { icons } from '../../constants/icons';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MovieListComponent,SvgIconComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit, OnDestroy {

  movies:Movie[]=[];
  loadedMoviesIds = new Set<number>();
  hasLogged = false;
  subscriptions: Subscription[] = [];
  hasLoad = false;
  icons = icons;
  movieLoading = false;
  isLoading = true;
@HostListener('window:scroll',['$event'])
onScroll(): void{
  const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1000;
  const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

  if (this.bottomReached() && (pos > max) && (this.movies.length > 0)) {
    if (!this.hasLogged) {
      this.loadMoreMovies();
    }
  }
}

  constructor(private movieService:MovieService){

    this.movieService.resetMoviePage();

  }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(){
    this.isLoading = false;
    this.movieService.getPopularMovies()
    .pipe(
      catchError(() => {
        this.isLoading = true;
        return of([]);
      })
    )
    .subscribe({
      next: (res) => {
        this.movies = res;
        this.updateLoadedMovieIds();
      } ,
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  loadMoreMovies(){
    this.hasLogged = true;
    this.hasLoad = false;
    this.movieService.getPopularMovies()
    .pipe(
      catchError(() => {
        this.hasLoad = true;
        return of([]);
      })
    )
    .subscribe({
      next: (res) => {
      const newMovies = res.filter(movie => !this.loadedMoviesIds.has(movie.id));
      // this.movies.push(...newMovies);
      this.movies = [...this.movies, ...newMovies];
      this.updateLoadedMovieIds();
      } ,
      complete: () => {
        this.hasLogged = false;
      }
    });
  }

  bottomReached(): boolean {

    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }

  updateLoadedMovieIds(){
    this.movies.forEach(movie=>this.loadedMoviesIds.add(movie.id));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
