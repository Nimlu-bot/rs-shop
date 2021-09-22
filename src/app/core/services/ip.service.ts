import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IipData } from '../constants/models';

@Injectable({
  providedIn: 'root',
})
export class IpService {
  sity$: Observable<string>;

  sitySubject$: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
    this.sitySubject$ = new BehaviorSubject<string>('Минск');
    this.sity$ = this.sitySubject$.asObservable();
  }

  getSity() {
    const city = this.http
      .get<IipData>(`https://api.sypexgeo.net/json/`)
      .pipe(map((data) => data.city.name_ru));
    return city;
  }
}
