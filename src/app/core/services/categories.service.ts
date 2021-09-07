import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icategory, Iproduct } from '../constants/models';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Icategory[]> {
    return this.http.get<Icategory[]>(`http://localhost:3004/categories`);
  }

  getGoods(category: string, subCategory: string): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(
      `http://localhost:3004/goods/category/${category}/${subCategory}`
    );
  }
}
