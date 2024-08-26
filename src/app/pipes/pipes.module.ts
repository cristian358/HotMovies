import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterPipe } from './poster.pipe';
import { MatchRoutePipe } from './matchRoute.pipe';


@NgModule({
  declarations: [
    PosterPipe,
    MatchRoutePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[PosterPipe,MatchRoutePipe]
})
export class PipesModule { }
