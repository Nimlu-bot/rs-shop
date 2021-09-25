/* eslint-disable ngrx/avoid-dispatching-multiple-actions-sequentially */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ROUT } from 'src/app/core/constants/constants';
import { Iimage, Iproduct } from 'src/app/core/constants/models';
import { setCategoryAndSubCategory } from 'src/app/redux/actions/category.actions';
import {
  getGoods,
  setCurrentProduct,
} from 'src/app/redux/actions/goods.actions';
import { selectGoods } from 'src/app/redux/selectors/goods.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  currentCategory = 'electronics';

  curentSubCategory = 'mobile';

  goods!: Iproduct[];

  imageObject: Iimage[] = [];

  constructor(private store: Store, private router: Router) {
    this.store.dispatch(
      getGoods({
        category: this.currentCategory,
        subCategory: this.curentSubCategory,
      })
    );
    this.store.dispatch(
      setCategoryAndSubCategory({
        category: this.currentCategory,
        subCategory: this.curentSubCategory,
      })
    );
  }

  ngOnInit(): void {
    this.store.select(selectGoods).subscribe((goods) => {
      this.goods = goods;
      this.imageObject = goods.map((product) => ({
        image: product.imageUrls[0],
        thumbImage: product.imageUrls[0],
        title: product.name,
      }));
    });
  }

  galleryClickHandler(event: number) {
    this.store.dispatch(
      setCurrentProduct({ currentProduct: this.goods[event] })
    );

    this.router.navigate([ROUT.DETAIL]);
  }
}
