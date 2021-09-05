import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCategories } from 'src/app/redux/selectors/caregories.selector';
import { Icategory } from 'src/app/core/constants/models';
import { Observable } from 'rxjs';
import {
  getCategories,
  setCategory,
} from 'src/app/redux/actions/category.actions';
import { Router } from '@angular/router';
import { ROUT } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Observable<Icategory[]>;

  currentCategory!: Observable<string>;

  constructor(private store: Store, private router: Router) {
    this.categories = this.store.select(selectCategories);
  }

  ngOnInit(): void {
    this.store.dispatch(getCategories());
  }

  goToCategory(categoryId: string) {
    this.store.dispatch(setCategory({ categoryId }));
    this.router.navigate([ROUT.CATEGORIES]);
  }
}
