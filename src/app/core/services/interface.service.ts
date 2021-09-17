import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterfaceService {
  isSearchOpen$: Observable<boolean>;

  isSearchOpenSubject$: BehaviorSubject<boolean>;

  constructor() {
    this.isSearchOpenSubject$ = new BehaviorSubject<boolean>(false);
    this.isSearchOpen$ = this.isSearchOpenSubject$.asObservable();
  }

  closeAll() {
    this.isSearchOpenSubject$.next(false);
  }

  openSearch() {
    this.isSearchOpenSubject$.next(true);
  }
}
