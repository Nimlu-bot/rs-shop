import { createReducer, on, Action } from '@ngrx/store';

import * as CategoryActions from '../actions/category.actions';
import {
  initialCategoriesState,
  ICategoriesState,
} from '../state/categories.state.model';

const reducer = createReducer(
  initialCategoriesState,
  on(
    CategoryActions.getCategories,
    (state): ICategoriesState => ({ ...state, loading: true })
  ),

  on(
    CategoryActions.getCategoriesSuccessfull,
    (state, { categories }): ICategoriesState => ({ ...state, categories })
  ),

  on(
    CategoryActions.getCategoriesFailed,
    (state, { error }): ICategoriesState => ({ ...state, error })
  )
);

export function CategoriesReducer(state: ICategoriesState, action: Action) {
  return reducer(state, action);
}
