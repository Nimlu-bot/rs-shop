import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from '../state/auth.state.model';

export const selectAuthState = createFeatureSelector<IAuthState>('authState');

export const selectAuth = createSelector(
  selectAuthState,
  (authState) => authState.isLogin
);
export const selectCurrentOrder = createSelector(
  selectAuthState,
  (authState) => authState.currentOrder
);
export const selectOrders = createSelector(
  selectAuthState,
  (authState) => authState.orders
);

export const selectFavorite = createSelector(
  selectAuthState,
  (authState) => authState.favorite
);
