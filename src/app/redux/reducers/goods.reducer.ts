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
  on(
    GoodsActions.setCurrentProduct,
    (state, { currentProduct }): IGoodsState => ({ ...state, currentProduct })
  ),
  on(
    GoodsActions.fetchProducts,
    (state): IGoodsState => ({ ...state, loading: true })
  ),
  on(
    GoodsActions.fetchProductsSuccessfull,
    (state, { goods }): IGoodsState => ({ ...state, goods })
  ),
  on(
    GoodsActions.fetchProductsFailed,
    (state, { error }): IGoodsState => ({ ...state, error })
  ),
  on(
    GoodsActions.getPopular,
    (state): IGoodsState => ({ ...state, loading: true })
  ),
  on(
    GoodsActions.getPopularSuccessfull,
    (state, { popular }): IGoodsState => ({ ...state, popular })
  ),
  on(
    GoodsActions.getPopularFailed,
    (state, { error }): IGoodsState => ({ ...state, error })
  )
);

export function GoodsReducer(state: IGoodsState, action: Action) {
  return reducer(state, action);
}
