import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Icategory } from 'src/app/core/constants/models';
import { tap } from 'rxjs/operators';
import {
  selectCategories,
  selectCurrentCategory,
} from 'src/app/redux/selectors/caregories.selector';
import { Router } from '@angular/router';
import { ROUT } from 'src/app/core/constants/constants';
import { getGoods } from 'src/app/redux/actions/goods.actions';
import { setCategoryAndSubCategory } from '../../../redux/actions/category.actions';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories!: Observable<Icategory[]>;

  categoryId!: string;

  currentCategory!: Icategory;

  constructor(private store: Store, private router: Router) {

  }

  ngOnInit(): void {
    this.categories = this.store.select(selectCategories);
    this.store
      .select(selectCurrentCategory)
      .pipe(
        tap((id: string) =>
          this.categories.subscribe((cat) => {
            // eslint-disable-next-line prefer-destructuring
            this.currentCategory = cat.filter(
              (category) => category.id === id
            )[0];
          })
        )
      )
      .subscribe();
  }

  clickHandler(id: string) {
    this.categories.subscribe((cat) => {
      // eslint-disable-next-line prefer-destructuring
      this.currentCategory = cat.filter((category) => category.id === id)[0];
    });
  }

  toCategory(category: string, subCategory: string) {
    // eslint-disable-next-line ngrx/avoid-dispatching-multiple-actions-sequentially
    this.store.dispatch(setCategoryAndSubCategory({ category, subCategory }));
    // eslint-disable-next-line ngrx/avoid-dispatching-multiple-actions-sequentially
    this.store.dispatch(getGoods({ category, subCategory }));
    this.router.navigate([ROUT.GOODS]);
  }
}
