import { Component } from '@angular/core';
import { IsortParams } from 'src/app/core/constants/models';
import { FilterService } from 'src/app/core/services/filter.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  private filter: IsortParams = {
    price: false,
    priceReverse: true,
    count: false,
    countReverse: true,
  };

  constructor(public filterService: FilterService) {}

  priceHandler() {
    this.filter = {
      ...this.filter,
      priceReverse: !this.filter.priceReverse,
      price: true,
      count: false,
    };
    this.filterService.setSortParams(this.filter);
  }

  countHandler() {
    this.filter = {
      ...this.filter,
      countReverse: !this.filter.countReverse,
      count: true,
      price: false,
    };
    this.filterService.setSortParams(this.filter);
  }
}
