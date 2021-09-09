import { createReducer, on, Action } from '@ngrx/store';

import * as GoodsActions from '../actions/goods.actions';
import { initialGoodsState, IGoodsState } from '../state/goods.state.model';

const reducer = createReducer(
  initialGoodsState,
  on(
    GoodsActions.getGoods,
    (state): IGoodsState => ({ ...state, loading: true })
  ),

  on(
    GoodsActions.getGoodsSuccessfull,
    (state, { goods }): IGoodsState => ({ ...state, goods })
  ),

  on(
    GoodsActions.getGoodsFailed,
    (state, { error }): IGoodsState => ({ ...state, error })
  ),
  on(GoodsActions.toggleFavorite, (state, { product }): IGoodsState => {
    const newProducts = state.goods.map((item) =>
      item.id === product.id
        ? { ...product, isFavorite: !product.isFavorite }
        : item
    );
    return { ...state, goods: newProducts };
  }),
  on(GoodsActions.toFavorite, (state, { product }): IGoodsState => {
    const newProducts = state.goods.map((item) =>
      item.id === product.id
        ? { ...product, isFavorite: !product.isFavorite }
        : item
    );
    return { ...state, goods: newProducts };
  }),

  on(GoodsActions.toCart, (state, { product }): IGoodsState => {
    const newProducts = state.goods.map((item) =>
      item.id === product.id
        ? {
            ...product,
            isInCart: true,
            availableAmount: product.availableAmount - 1,
          }
        : item
    );
    return { ...state, goods: newProducts };
  }),
  on(GoodsActions.fromCart, (state, { product }): IGoodsState => {
    const newProducts = state.goods.map((item) =>
      item.id === product.id
        ? {
            ...product,
            isInCart: false,
            availableAmount: product.availableAmount + 1,
          }
        : item
    );
    return { ...state, goods: newProducts };
  }),
  on(
    GoodsActions.setCurrentProduct,
    (state, { currentProduct }): IGoodsState => ({ ...state, currentProduct })
  )
);

export function GoodsReducer(state: IGoodsState, action: Action) {
  return reducer(state, action);
}
