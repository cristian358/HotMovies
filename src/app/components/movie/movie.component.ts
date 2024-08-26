import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie } from '../../models/movieModel.interface';
import { Router } from '@angular/router';
import { PipesModule } from '../../pipes/pipes.module';
import { MovieDetails } from '../../models/movieDetailsModel.interface';
import { ActivatedRoute } from '@angular/router';
import { SvgIconComponent } from '../shared/svg-icon-manage/svg-icon.component';
import { icons } from '../../constants/icons';

@Component({
  selector: 'app-movie',
  imports: [CommonModule, PipesModule,SvgIconComponent ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent {

  @Input() movies?:Movie[];
  @Input() viewMode?:String = 'grid';;
  movieDetails?:MovieDetails;
  icons = icons;

  constructor(private router:Router,private activatedRoute:ActivatedRoute){}

  getStars(voteAverage:number){

    const starsCount = Math.floor(voteAverage);
    return Array(starsCount).fill(0);

  }

  onMovieCLick(movie:Movie){

    this.router.navigate(['/movie', movie.id])

  }
}
