import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth.service';
import { checkLogin, login } from '../actions/auth.actions';

@Injectable({ providedIn: 'any' })
export class AuthEffects {
  constructor(private actions: Actions, private authService: AuthService) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  checkLogin: Observable<Action> = createEffect(() =>
    // eslint-disable-next-line ngrx/prefer-effect-callback-in-block-statement
    this.actions.pipe(
      ofType(checkLogin),
      switchMap(() =>
        this.authService
          .checkLogin()
          .pipe(map((userData) => login({ userData })))
      )
    )
  );
}
