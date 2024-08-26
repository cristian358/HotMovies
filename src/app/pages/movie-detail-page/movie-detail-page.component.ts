import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from '../../components/movie-detail/movie-detail.component';

@Component({
  selector: 'app-movie-detail-page',
  standalone: true,
  imports: [CommonModule, MovieDetailComponent],
  templateUrl: './movie-detail-page.component.html',
  styleUrl: './movie-detail-page.component.css'
})
export class MovieDetailPageComponent implements OnInit {

  constructor(){}
  
  ngOnInit() {}
}
