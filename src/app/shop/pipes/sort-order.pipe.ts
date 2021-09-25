import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct, IsortParams } from 'src/app/core/constants/models';

@Pipe({
  name: 'sortOrder',
})
export class SortOrderPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(
    results: Iproduct[] | null,
    filter: IsortParams | undefined
  ): Iproduct[] {
    if (!results) return [];
    let filteredResults: Iproduct[] = results;
    if (filter === undefined) return filteredResults;
    if (filter.price) {
      filteredResults = [...results].sort(this.sortPrice);
      if (filter.priceReverse) filteredResults = filteredResults.reverse();
    }
    if (filter.count) {
      filteredResults = [...results].sort(this.sortCount);
      if (filter.countReverse) filteredResults = filteredResults.reverse();
    }
    return filteredResults;
  }

  private sortPrice(a: Iproduct, b: Iproduct): number {
    const count1 = +a.price;
    const count2 = +b.price;
    return count1 - count2;
  }

  private sortCount(a: Iproduct, b: Iproduct): number {
    const count1 = +a.rating;
    const count2 = +b.rating;
    return count1 - count2;
  }
}
