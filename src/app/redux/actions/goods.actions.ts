import { createAction, props } from '@ngrx/store';
import { Iproduct } from 'src/app/core/constants/models';

export const getGoods = createAction(
  '[GOODS] GET ALL GOODS',
  props<{ category: string; subCategory: string }>()
);

export const getGoodsSuccessfull = createAction(
  '[GOODS EFFECT] SET FETCHED GOODS',
  props<{ goods: Iproduct[] }>()
);

export const getGoodsFailed = createAction(
  '[GOODS EFFECT] FETCH GOODS WAS FAILED',
  props<{ error: Error }>()
);

export const findProduct = createAction(
  '[GOODS ] GET PRODUCT',
  props<{ productId: string }>()
);

export const toggleFavorite = createAction(
  '[GOODS ] TOGGLE FAVORITE',
  props<{ product: Iproduct }>()
);
export const toCart = createAction(
  '[GOODS ] TO CART',
  props<{ product: Iproduct }>()
);
export const fromCart = createAction(
  '[GOODS ] From CART',
  props<{ product: Iproduct }>()
);
export const setCurrentProduct = createAction(
  '[GOODS ] SET CURRENT PRODUCT',
  props<{ currentProduct: Iproduct }>()
);
