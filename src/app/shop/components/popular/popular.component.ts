import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoriesService } from 'src/app/core/services/categories.service';

// import Swiper core and required modules
import SwiperCore, { Grid, Pagination } from 'swiper';
import { Iproduct } from '../../../core/constants/models';

SwiperCore.use([Pagination]);
SwiperCore.use([Grid]);

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PopularComponent implements OnInit {
  products: Iproduct[] = [];

  constructor(private categoryservice: CategoriesService) {}

  ngOnInit() {
    this.categoryservice
      .getPopular(['appliances', 'electronics', 'computers-peripherals'])
      .subscribe((products) => {
        this.products = this.products.concat(
          products.filter((product) => product.rating === 5)
        );
      });
  }

  getPopular() {}
}
