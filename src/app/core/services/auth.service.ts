import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuth } from 'src/app/redux/selectors/auth.selector';
import { Observable, of } from 'rxjs';
import { checkLogin, login, logout } from 'src/app/redux/actions/auth.actions';
import { Iauth } from '../constants/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  islLogin: Observable<boolean>;

  KEY = 'user-data';

  constructor(private store: Store) {
    this.islLogin = this.store.select(selectAuth);
    this.store.dispatch(checkLogin());
  }

  logIn(data: Iauth) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
    this.store.dispatch(login({ userData: data }));
  }

  logOut() {
    this.store.dispatch(logout());
    localStorage.removeItem(this.KEY);
  }

  checkLogin() {
    const userData = JSON.parse(localStorage.getItem(this.KEY)!);
    if (userData) {
      this.store.dispatch(login({ userData }));
      return of(JSON.parse(localStorage.getItem(this.KEY)!));
    }
    return of({ email: '', password: '' });
  }
}
