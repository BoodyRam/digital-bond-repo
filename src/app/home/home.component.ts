import { Component } from '@angular/core';
import { LoadingServiceService } from '../loading/service/loading-service.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { ServicesComponent } from "../home/services/services.component";
import { AboutHomeComponent } from "./about-home/about-home.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeroComponent, ServicesComponent, AboutHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private loadingService: LoadingServiceService){
  this.loadingService.show()
}
reviews = [
  {
    id: 0,
    text: 'Amazing service! Highly recommended.',
    name: 'Jane Doe',
    role: 'CEO, Company A',
    photo: 'avatar.png',
  },
  {
    id: 1,
    text: 'Outstanding experience. Will come back for sure.',
    name: 'John Smith',
    role: 'Manager, Company B',
    photo: 'avatar.png',
  },
  {
    id: 2,
    text: 'The team was professional and courteous.',
    name: 'Alice Johnson',
    role: 'Freelancer',
    photo: 'avatar.png',
  },
  {
    id: 3,
    text: 'Amazing service! Highly recommended.',
    name: 'Jane Doe',
    role: 'CEO, Company A',
    photo: 'avatar.png',
  },
  {
    id: 4,
    text: 'Outstanding experience. Will come back for sure.',
    name: 'John Smith',
    role: 'Manager, Company B',
    photo: 'avatar.png',
  },
  {
    id: 5,
    text: 'The team was professional and courteous.',
    name: 'Alice Johnson',
    role: 'Freelancer',
    photo: 'avatar.png',
  },
];


}
