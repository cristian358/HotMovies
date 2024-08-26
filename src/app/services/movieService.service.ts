import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { SearchResponse, Movie } from '../models/movieModel.interface';
import { MovieDetails } from '../models/movieDetailsModel.interface';
import { Cast, Credits } from '../models/movieCreditsModel.interface';
import { tmdbConfig, tmdbHeader } from '../constants/config';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieListPage = 1;
  public movieLoaded = false;
  constructor(private http:HttpClient) { }

  getPopularMovies():Observable<Movie[]>{
    this.movieLoaded=true;

    return this.http.get<SearchResponse>(`${tmdbConfig.URL}/movie/popular?language=ru-RU&page=${this.movieListPage}`,{headers:tmdbHeader.headers}).pipe(
      map((response:any)=> response.results),
      tap(()=>{
        this.movieListPage+=1;
        this.movieLoaded=false;
      })
    )

  }

  searchMovies(texto:string):Observable<Movie[]>{
    return this.http.get<SearchResponse>(`${tmdbConfig.URL}/search/movie?query=${texto}&language=ru-RU&page=1`,{headers:tmdbHeader.headers}).pipe(
      map(res=>res.results)
    )
  }

  getMovieDetails(id:string){
    return this.http.get<MovieDetails>(`${tmdbConfig.URL}/movie/${id}?language=ru-RU`,{headers:tmdbHeader.headers}).pipe(
      catchError(err=> of(null))
    )
  }

  getmovieCredits(id:string):Observable<Cast[] | null>{
    return this.http.get<Credits>(`${tmdbConfig.URL}/movie/${id}/credits?language=es-ES`,{headers:tmdbHeader.headers}).pipe(
      map(res=>res.cast),
      catchError(err=> of(null))
      )
  }

  resetMoviePage(){
    this.movieListPage = 1;
  }
}
