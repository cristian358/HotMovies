import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movieService.service';
import { Movie } from '../../models/movieModel.interface';

@Component({
  selector: 'app-movie-search-page',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
  templateUrl: './movie-search-page.component.html',
  styleUrl: './movie-search-page.component.css'
})
export class MovieSearchPageComponent implements OnInit {
  
  movieName='';
  movies:Movie[]=[];
  noMovie='';

  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService){}

  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{
      this.movieName=params['movie'];
      this.movieService.searchMovies(this.movieName).subscribe(movies=>{
        this.movies=movies;
        if(this.movies.length == 0){

          this.noMovie= 'Не найденно';

        }
      })
    })
  }

}
