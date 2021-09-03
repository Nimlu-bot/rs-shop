import { createAction, props } from '@ngrx/store';
import { Iauth } from 'src/app/core/constants/models';

export const login = createAction(
  '[LOGIN] LOGIN',
  props<{ userData: Iauth }>()
);
export const logout = createAction('[LOGIN] LOGOUT');
export const checkLogin = createAction('[LOGIN] CHECKLOGIN');
