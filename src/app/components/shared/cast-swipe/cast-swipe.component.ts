import { AfterViewInit, Component, Input } from '@angular/core';
import { Cast } from '../../../models/movieCreditsModel.interface';
import Swiper from 'swiper';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../../../pipes/pipes.module';

@Component({
  selector: 'app-cast-swipe',
  standalone: true,
  imports: [CommonModule, PipesModule],
  templateUrl: './cast-swipe.component.html',
  styleUrl: './cast-swipe.component.css'
})
export class CastSwipeComponent implements AfterViewInit {

  @Input() cast?:Cast[];
  
  ngAfterViewInit() {
    
    const swiper = new Swiper('.swiper',{
      slidesPerView:6.3,
      freeMode:true,
      spaceBetween:15,
      breakpoints: {
        320: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5.3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 6.3,
          spaceBetween: 15,
        },
      
        1280: {
          slidesPerView: 6.3,
          spaceBetween: 15,
        }}
    })

  }

}
