import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movieService.service';
import { CommonModule } from '@angular/common';
import { MovieDetails } from '../../models/movieDetailsModel.interface';
import { combineLatest } from 'rxjs';
import { Cast } from '../../models/movieCreditsModel.interface';
import { PipesModule } from '../../pipes/pipes.module';
import { CastSwipeComponent } from '../shared/cast-swipe/cast-swipe.component';
import { SvgIconComponent } from '../shared/svg-icon-manage/svg-icon.component';
import { icons } from '../../constants/icons';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, PipesModule, CastSwipeComponent,SvgIconComponent ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {

  movieDetail?:MovieDetails;
  cast : Cast[] =[];
  icons = icons;
  
  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService){}
  
  ngOnInit() {
    const {id} = this.activatedRoute.snapshot.params;


    combineLatest([

      this.movieService.getMovieDetails(id),
      this.movieService.getmovieCredits(id)

    ]).subscribe(([movie,cast])=>{

      if (movie === null || cast === null) {
        return;
      }
      this.movieDetail= movie;
      this.cast = cast;
    })
  }

  getStars(voteAverage:number){

    const starsCount = Math.floor(voteAverage);
    return Array(starsCount).fill(0);

  }
}
