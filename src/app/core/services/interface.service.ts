import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterfaceService {
  isSearchOpen$: Observable<boolean>;

  isSearchOpenSubject$: BehaviorSubject<boolean>;

  isConfirmOpen$: Observable<boolean>;

  isConfirmOpenSubject$: BehaviorSubject<boolean>;

  isLogin$: Observable<boolean>;

  isLoginSubject$: BehaviorSubject<boolean>;

  constructor() {
    this.isSearchOpenSubject$ = new BehaviorSubject<boolean>(false);
    this.isSearchOpen$ = this.isSearchOpenSubject$.asObservable();
    this.isConfirmOpenSubject$ = new BehaviorSubject<boolean>(false);
    this.isConfirmOpen$ = this.isConfirmOpenSubject$.asObservable();
    this.isLoginSubject$ = new BehaviorSubject<boolean>(true);
    this.isLogin$ = this.isLoginSubject$.asObservable();
  }

  closeAll() {
    this.isSearchOpenSubject$.next(false);
  }

  openSearch() {
    this.isSearchOpenSubject$.next(true);
  }

  openConfirm() {
    this.isConfirmOpenSubject$.next(true);
  }

  coloseConfirm() {
    this.isConfirmOpenSubject$.next(false);
  }

  toggleLogin() {
    this.isLoginSubject$.next(!this.isLoginSubject$.value);
  }
}
