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
  on(AuthActions.checkLogin, (state): IAuthState => ({ ...state })),
  on(
    AuthActions.toFavorite,
    (state, { product }): IAuthState => ({
      ...state,
      favorite: state.favorite.concat(product),
    })
  ),
  on(AuthActions.fromFavorite, (state, { product }): IAuthState => {
    const newFavorite = state.favorite.filter((item) => item.id !== product.id);
    return {
      ...state,
      favorite: newFavorite,
    };
  }),
  on(
    AuthActions.toCart,
    (state, { product }): IAuthState =>
      // const newOrderProducts = [...state.currentOrder.products, product];
      // const newOrder = { ...state.currentOrder, products: newOrderProducts };
      ({
        ...state,
        currentOrder: state.currentOrder.concat(product),
      })
  ),
  on(AuthActions.fromCart, (state, { product }): IAuthState => {
    const newCart = state.currentOrder.filter((item) => item.id !== product.id);
    return {
      ...state,
      favorite: newCart,
    };
  })
);

export function AuthReducer(state: IAuthState, action: Action) {
  return reducer(state, action);
}
