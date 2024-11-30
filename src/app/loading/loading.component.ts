import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  constructor(private router: Router){}
  ngOnInit(): void {
    timer(2000).subscribe(() => {
      this.router.navigate(['/home']);
    })
  }
}
