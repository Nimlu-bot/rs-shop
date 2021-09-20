import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IGoodsState } from '../state/goods.state.model';

export const selectGoodsState =
  createFeatureSelector<IGoodsState>('goodsState');

export const selectGoods = createSelector(
  selectGoodsState,
  (goodsState) => goodsState.goods
);
export const selectCurrentProduct = createSelector(
  selectGoodsState,
  (goodsState) => goodsState.currentProduct
);
export const selectPopular = createSelector(
  selectGoodsState,
  (goodsState) => goodsState.popular
);
