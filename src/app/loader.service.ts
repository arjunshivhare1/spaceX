import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaderSubject = new BehaviorSubject(false);
  
  constructor() { }

  showLoader() {
    this.loaderSubject.next(true);
  }
  hideLoader() {
    this.loaderSubject.next(false);
  }

  getLoader() {
    return this.loaderSubject.asObservable();
  }
}
