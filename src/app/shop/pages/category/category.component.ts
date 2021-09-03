import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Icategory } from 'src/app/core/constants/models';
import { selectCategories } from 'src/app/redux/selectors/caregories.selector';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories!: Observable<Icategory[]>;

  currentCategory!: Icategory;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.categories = this.store.select(selectCategories);
  }

  clickHandler(id: string) {
    this.categories.subscribe((cat) => {
      // eslint-disable-next-line prefer-destructuring
      this.currentCategory = cat.filter((category) => category.id === id)[0];
    });
  }
}
