import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { CategoriesService } from 'src/app/core/services/categories.service';
import {
  getCategories,
  getCategoriesSuccessfull,
  getCategoriesFailed,
} from '../actions/category.actions';

@Injectable({ providedIn: 'any' })
export class CategoriesEffects {
  constructor(
    private actions: Actions,
    private categoriesService: CategoriesService
  ) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  getCategories: Observable<Action> = createEffect(() =>
    // eslint-disable-next-line ngrx/prefer-effect-callback-in-block-statement
    this.actions.pipe(
      ofType(getCategories),
      switchMap(() =>
        this.categoriesService.getCategories().pipe(
          map((categories) => getCategoriesSuccessfull({ categories })),
          catchError((error) => of(getCategoriesFailed({ error })))
        )
      )
    )
  );
}
