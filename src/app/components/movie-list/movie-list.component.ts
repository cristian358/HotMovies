import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie } from '../../models/movieModel.interface';
import { PipesModule } from '../../pipes/pipes.module';
import { SvgIconComponent } from '../shared/svg-icon-manage/svg-icon.component';
import { icons } from '../../constants/icons';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, PipesModule,SvgIconComponent,  MovieComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent {

  @Input() movies?:Movie[];
  viewMode: 'list' | 'grid' = 'grid';
  icons = icons;

  constructor(){}

  getDynamicClasses(type: string): string {
    const isGrid = type === 'grid';
    const isViewModeGrid = this.viewMode === 'grid';
  
    return [
      isGrid === isViewModeGrid ? 'fill-svgwhite' : 'fill-svggrey',
    ].join(' ');
  }

  toggleViewMode(mode: 'list' | 'grid') {
    this.viewMode = mode;
  }
}
