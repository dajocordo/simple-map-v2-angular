import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [ImageModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imgSrc = 'pc-with-a-map-2.png';

  constructor(private router: Router) {}

  navigateToMap() {
    this.router.navigate(['/map']);
  }
}
