import { createReducer, on, Action } from '@ngrx/store';

import * as AuthActions from '../actions/auth.actions';

import { IAuthState, initialAuthState } from '../state/auth.state.model';

const reducer = createReducer(
  initialAuthState,
  on(
    AuthActions.login,
    (state, { userData }): IAuthState => ({
      ...state,
      isLogin: true,
      userData,
    })
  ),
  on(AuthActions.logout, (state): IAuthState => ({ ...state, isLogin: false })),
  on(AuthActions.checkLogin, (state): IAuthState => ({ ...state }))
);

export function AuthReducer(state: IAuthState, action: Action) {
  return reducer(state, action);
}
