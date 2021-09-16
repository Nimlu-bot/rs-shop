import { createAction, props } from '@ngrx/store';
import { Iauth, IdeliveryInfo, Iproduct } from 'src/app/core/constants/models';

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
export const increaseAmount = createAction(
  '[USER] INCREASE AMOUNT',
  props<{ product: Iproduct }>()
);
export const decreaseAmount = createAction(
  '[USER] DECREASE AMOUNT',
  props<{ product: Iproduct }>()
);
export const createOrder = createAction(
  '[USER] CREATE ORDER',
  props<{ order: IdeliveryInfo }>()
);
export const clearCurrentOrder = createAction('[USER] CLEAR CURRENT ORDER');
