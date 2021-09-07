import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  Iproduct,
  Icategory,
  IsubCategory,
} from 'src/app/core/constants/models';
import {
  selectCategories,
  selectCurrentCategory,
  selectCurrentSubCategory,
} from 'src/app/redux/selectors/caregories.selector';
import { selectGoods } from 'src/app/redux/selectors/goods.selector';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss'],
})
export class GoodsComponent implements OnInit {
  goods!: Observable<Iproduct[]>;

  categoryId!: string;

  subCategoryId!: string;

  categories!: Icategory[];

  category!: Icategory;

  subCategory!: IsubCategory;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.goods = this.store.select(selectGoods);
    this.store.select(selectCurrentCategory).subscribe((category) => {
      this.categoryId = category;
    });
    this.store.select(selectCurrentSubCategory).subscribe((category) => {
      this.subCategoryId = category;
    });
    this.store.select(selectCategories).subscribe((categories) => {
      this.categories = categories;
    });
    // eslint-disable-next-line prefer-destructuring
    this.category = this.categories.filter(
      (cat) => cat.id === this.categoryId
    )[0];

    // eslint-disable-next-line prefer-destructuring
    this.subCategory = this.category.subCategories.filter(
      (cat) => cat.id === this.subCategoryId
    )[0];
  }
}
