import { createReducer, on, Action } from '@ngrx/store';

import * as FrontActions from '../actions/front.actions';

import { IFrontState, initialFrontState } from '../state/frontend.state.model';

const reducer = createReducer(
  initialFrontState,
  on(
    FrontActions.toggleLogin,
    (state): IFrontState => ({ ...state, showLogin: !state.showLogin })
  )
);

export function FrontReducer(state: IFrontState, action: Action) {
  return reducer(state, action);
}
