import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFrontState } from '../state/frontend.state.model';

export const selectFrontState =
  createFeatureSelector<IFrontState>('frontState');

export const selectLogin = createSelector(
  selectFrontState,
  (frontState) => frontState.showLogin
);
