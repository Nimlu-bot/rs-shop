import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuth } from 'src/app/redux/selectors/auth.selector';
import { Observable, of } from 'rxjs';
import { checkLogin, login, logout } from 'src/app/redux/actions/auth.actions';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ILoginData, IregistrationData, Itoken } from '../constants/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  islLogin: Observable<boolean>;

  KEY = 'user-data';

  constructor(private store: Store, private http: HttpClient) {
    this.islLogin = this.store.select(selectAuth);
    this.store.dispatch(checkLogin());
  }

  logIn({ email, password }: ILoginData) {
    const responce = this.http
      .post<Itoken>(`http://localhost:3004/users/login/`, {
        login: email,
        password,
      })
      .pipe(
        map((data) => ({ ...data, email })),
        tap((data) => localStorage.setItem(this.KEY, JSON.stringify(data))),
        tap((data) => this.store.dispatch(login({ userData: data })))
      );

    return responce;
    // localStorage.setItem(this.KEY, JSON.stringify(data));
    // this.store.dispatch(login({ userData: data }));
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
    return of({ email: '', token: '' });
  }

  register({ name, surname, email, password }: IregistrationData) {
    const responce = this.http
      .post<Itoken>(`http://localhost:3004/users/register/`, {
        firstName: name,
        lastName: surname,
        login: email,
        password,
      })
      .pipe(
        map((data) => ({ ...data, email })),
        tap((data) => localStorage.setItem(this.KEY, JSON.stringify(data))),
        tap((data) => this.store.dispatch(login({ userData: data })))
      );

    return responce;
    // console.log(name);
  }
}
