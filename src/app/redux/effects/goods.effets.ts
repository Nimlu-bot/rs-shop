import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { CategoriesService } from 'src/app/core/services/categories.service';
import {
  getGoods,
  getGoodsSuccessfull,
  getGoodsFailed,
  fetchProducts,
  fetchProductsSuccessfull,
  fetchProductsFailed,
} from '../actions/goods.actions';

@Injectable({ providedIn: 'any' })
export class GoodsEffects {
  constructor(
    private actions: Actions,
    private categoriesService: CategoriesService
  ) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  getGoods: Observable<Action> = createEffect(() =>
    // eslint-disable-next-line ngrx/prefer-effect-callback-in-block-statement
    this.actions.pipe(
      ofType(getGoods),
      // tap(() => console.log('hi')),
      switchMap(({ category, subCategory }) =>
        this.categoriesService.getGoods(category, subCategory).pipe(
          map((goods) => getGoodsSuccessfull({ goods })),
          catchError((error) => of(getGoodsFailed({ error })))
        )
      )
    )
  );

  // eslint-disable-next-line @typescript-eslint/member-ordering
  fetchProducts: Observable<Action> = createEffect(() =>
    // eslint-disable-next-line ngrx/prefer-effect-callback-in-block-statement
    this.actions.pipe(
      ofType(fetchProducts),
      // tap(() => console.log('hi')),
      switchMap(({ serchString }) =>
        this.categoriesService.fetchProducts(serchString).pipe(
          map((goods) => fetchProductsSuccessfull({ goods })),
          catchError((error) => of(fetchProductsFailed({ error })))
        )
      )
    )
  );

  // // eslint-disable-next-line @typescript-eslint/member-ordering
  // getPopular: Observable<Action> = createEffect(() =>
  //   // eslint-disable-next-line ngrx/prefer-effect-callback-in-block-statement
  //   this.actions.pipe(
  //     ofType(getPopular),
  //     // tap(() => console.log('hi')),
  //     switchMap(({ categories }) =>
  //       this.categoriesService.getPopular(categories).pipe(
  //         map((goods) => fetchProductsSuccessfull({ goods })),
  //         catchError((error) => of(fetchProductsFailed({ error })))
  //       )
  //     )
  //   )
  // );
}
