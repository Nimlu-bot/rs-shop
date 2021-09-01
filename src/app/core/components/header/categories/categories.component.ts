import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCategories } from 'src/app/redux/selectors/caregories.selector';
import { Icategory } from 'src/app/core/constants/models';
import { Observable } from 'rxjs';
import { getCategories } from 'src/app/redux/actions/category.actions';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Observable<Icategory[]>;

  constructor(private store: Store) {
    this.categories = this.store.select(selectCategories);
  }

  ngOnInit(): void {
    this.store.dispatch(getCategories());

    console.log(this.categories);
  }
}
