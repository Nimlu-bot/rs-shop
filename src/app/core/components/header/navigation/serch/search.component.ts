/* eslint-disable ngrx/avoid-dispatching-multiple-actions-sequentially */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ROUT } from 'src/app/core/constants/constants';
import {
  Icategory,
  Iproduct,
  IsubCategory,
} from 'src/app/core/constants/models';
import { CategoriesService } from 'src/app/core/services/categories.service';
import {
  setCategory,
  setCategoryAndSubCategory,
} from 'src/app/redux/actions/category.actions';
import {
  getGoods,
  setCurrentProduct,
} from 'src/app/redux/actions/goods.actions';
import { selectGoods } from 'src/app/redux/selectors/goods.selector';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  goods!: Iproduct[];

  categories!: Icategory[] | IsubCategory[];

  constructor(
    private store: Store,
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.select(selectGoods).subscribe((goods) => {
      this.goods = goods;
    });
    this.categories = this.categoriesService.categories;
  }

  toCategory(category: Icategory | IsubCategory) {
    // eslint-disable-next-line no-prototype-builtins
    if (category.hasOwnProperty('subCategories')) {
      this.store.dispatch(setCategory({ categoryId: category.id }));
      this.router.navigate([ROUT.CATEGORIES]);
    } else {
      const parentCategory: Icategory | null =
        this.categoriesService.findCategory(category.id);
      if (parentCategory) {
        this.store.dispatch(
          setCategoryAndSubCategory({
            category: parentCategory.id,
            subCategory: category.id,
          })
        );
        this.store.dispatch(
          getGoods({ category: parentCategory.id, subCategory: category.id })
        );
        this.router.navigate([ROUT.GOODS]);
      }
    }
  }

  toDetail(product: Iproduct) {
    this.store.dispatch(
      setCategoryAndSubCategory({
        category: product.category!,
        subCategory: product.subCategory!,
      })
    );
    this.store.dispatch(setCurrentProduct({ currentProduct: product }));
    this.router.navigate([ROUT.DETAIL]);

  }
}
