import { Component, OnInit } from '@angular/core';
import { INITIAL_STATE, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Icategory } from 'src/app/core/constants/models';
import { switchMap, tap } from 'rxjs/operators';
import {
  selectCategories,
  selectCurrentCategory,
} from 'src/app/redux/selectors/caregories.selector';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories!: Observable<Icategory[]>;

  categoryId!: string;

  currentCategory!: Icategory;

  constructor(private store: Store) {}

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
}
