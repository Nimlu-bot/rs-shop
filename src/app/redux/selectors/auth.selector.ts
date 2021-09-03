import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from '../state/auth.state.model';

export const selectAuthState = createFeatureSelector<IAuthState>('authState');

export const selectAuth = createSelector(
  selectAuthState,
  (authState) => authState.isLogin
);
