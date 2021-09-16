import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Category,
  Icategory,
  Iimage,
  Iproduct,
  IsubCategory,
  Product,
  SubCategory,
} from 'src/app/core/constants/models';
import { toCart } from 'src/app/redux/actions/auth.actions';
import { toggleFavorite } from 'src/app/redux/actions/goods.actions';
import {
  selectCategories,
  selectCurrentCategory,
  selectCurrentSubCategory,
} from 'src/app/redux/selectors/caregories.selector';
import {
  selectCurrentProduct,
  selectGoods,
} from '../../../redux/selectors/goods.selector';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  product: Iproduct = new Product();

  categoryId = '';

  subCategoryId = '';

  categories: Icategory[] = [];

  category: Icategory = new Category();

  subCategory: IsubCategory = new SubCategory();

  imageObject: Iimage[] = [];

  @Input() currentImage = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectCurrentProduct).subscribe((product) => {
      if (product) this.product = product;
    });
    this.store.select(selectGoods).subscribe((products) => {
      // eslint-disable-next-line prefer-destructuring
      this.product = products.filter(
        (product) => product.id === this.product.id
      )[0];
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
        this.imageObject = this.product.imageUrls.map((url) => ({
          image: url,
          thumbImage: url,
        }));
        this.currentImage = this.imageObject[0].image;
      }
    }
  }

  galleryClickHandler(index: number) {
    this.currentImage = this.imageObject[index].image;
  }

  toggleFeatured() {
    this.store.dispatch(toggleFavorite({ product: this.product }));
  }

  toCart() {
    this.store.dispatch(toCart({ product: this.product }));
    console.log(this.product);
  }
}
