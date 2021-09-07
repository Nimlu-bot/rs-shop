import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICategoriesState } from '../state/categories.state.model';

export const selectCategoriesState =
  createFeatureSelector<ICategoriesState>('categoriesState');

export const selectCategories = createSelector(
  selectCategoriesState,
  (categoriesState) => categoriesState.categories
);

export const selectCurrentCategory = createSelector(
  selectCategoriesState,
  (categoriesState) => categoriesState.currentCategory
);
export const selectCurrentSubCategory = createSelector(
  selectCategoriesState,
  (categoriesState) => categoriesState.currentSubCategory
);
