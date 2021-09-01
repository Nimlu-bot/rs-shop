import { createAction, props } from '@ngrx/store';
import { Icategory } from 'src/app/core/constants/models';

export const getCategories = createAction('[CATEGORIES] GET ALL CATEGORIES');

export const getCategoriesSuccessfull = createAction(
  '[CATEGORIES EFFECT] SET FETCHED CATEGORIES',
  props<{ categories: Icategory[] }>()
);

export const getCategoriesFailed = createAction(
  '[CATEGORIES EFFECT] FETCH CATEGORIES WAS FAILED',
  props<{ error: Error }>()
);
