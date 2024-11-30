import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { LoadingServiceService } from './loading/service/loading-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'digitalBond2';
  isLoading: boolean = false;

  constructor(private loadingService: LoadingServiceService) {}

  ngOnInit() {
    this.loadingService.loading$.subscribe((loading) => {
      this.isLoading = loading;
    });
  }
}
