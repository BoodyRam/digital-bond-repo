import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {

  private loadingIcon = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingIcon.asObservable();

  show() {
    this.loadingIcon.next(true);
  }

  hide() {
    this.loadingIcon.next(false);
  }
}
