import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  Iproduct,
  Icategory,
  IsubCategory,
  IsortParams,
  Category,
  SubCategory,
} from 'src/app/core/constants/models';
import { FilterService } from 'src/app/core/services/filter.service';
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
export class GoodsComponent implements OnInit, OnDestroy {
  goods!: Iproduct[];

  goodsToShow: Iproduct[] = [];

  categoryId!: string;

  subCategoryId!: string;

  categories: Icategory[] = [];

  category: Icategory = new Category();

  subCategory: IsubCategory = new SubCategory();

  filter: IsortParams | undefined;

  showNumber = 10;

  private destroyed$ = new Subject<void>();

  constructor(private filterService: FilterService, private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectGoods).subscribe((goods) => {
      this.goods = goods;
      this.goodsToShow = this.goods.slice(0, this.showNumber);
    });
    this.store.select(selectCurrentCategory).subscribe((category) => {
      this.categoryId = category;
    });
    this.store.select(selectCurrentSubCategory).subscribe((category) => {
      this.subCategoryId = category;
    });
    this.store.select(selectCategories).subscribe((categories) => {
      this.categories = categories;
    });

    if (this.categories.length) {
      const tmpCategory = this.categories.filter(
        (cat) => cat.id === this.categoryId
      )[0];
      if (tmpCategory) {
        this.category = tmpCategory;
        const tmpSubCategory = this.category.subCategories.filter(
          (cat) => cat.id === this.subCategoryId
        )[0];
        if (tmpSubCategory) this.subCategory = tmpSubCategory;
      }
    }

    this.filterService.sortParams$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((filter) => {
        this.filter = filter;
      });
  }

  showMore() {
    this.showNumber += 10;
    this.goodsToShow = this.goods.slice(0, this.showNumber);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
