import { createAction, props } from '@ngrx/store';
import { Iauth, Iproduct } from 'src/app/core/constants/models';

export const login = createAction(
  '[LOGIN] LOGIN',
  props<{ userData: Iauth }>()
);
export const logout = createAction('[LOGIN] LOGOUT');
export const checkLogin = createAction('[LOGIN] CHECKLOGIN');
export const toFavorite = createAction(
  '[USER] TO FAVORITE',
  props<{ product: Iproduct }>()
);
export const fromFavorite = createAction(
  '[USER] FROM FAVORITE',
  props<{ product: Iproduct }>()
);
export const toCart = createAction(
  '[USER] TO CART',
  props<{ product: Iproduct }>()
);
export const fromCart = createAction(
  '[USER] FROM CART',
  props<{ product: Iproduct }>()
);
