import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IsortParams } from '../constants/models';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public sortParams$: Observable<IsortParams>;

  private sortParamsSubject$ = new BehaviorSubject({
    price: false,
    priceReverse: true,
    count: false,
    countReverse: true,
  });

  constructor() {
    this.sortParams$ = this.sortParamsSubject$.asObservable();
  }

  public setSortParams(params: IsortParams) {
    this.sortParamsSubject$.next(params);
  }
}
