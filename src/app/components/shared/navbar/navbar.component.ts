import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PipesModule } from '../../../pipes/pipes.module';
import { SvgIconComponent } from '../svg-icon-manage/svg-icon.component';
import { icons } from '../../../constants/icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, PipesModule, RouterLink,SvgIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  
  icons = icons;

  constructor(public router:Router){}
  
  
  ngOnInit(): void {
    
  }

  buscarPelicula(texto:string){

    texto = texto.trim();
    if (texto.length === 0) {

      return;
      
    }

    this.router.navigate(['/search', texto]);

  }

}
