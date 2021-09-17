import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCategories } from 'src/app/redux/selectors/caregories.selector';
import { Icategory, Iproduct, IsubCategory } from '../constants/models';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories!: Icategory[] | IsubCategory[];

  constructor(private http: HttpClient, private store: Store) {}

  getCategories(): Observable<Icategory[]> {
    return this.http.get<Icategory[]>(`http://localhost:3004/categories`);
  }

  getGoods(category: string, subCategory: string): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(
      `http://localhost:3004/goods/category/${category}/${subCategory}`
    );
  }

  fetchProducts(serchString: string): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`http://localhost:3004/goods/search/`, {
      params: new HttpParams().set('text', serchString),
    });
  }

  findCategories(serchString: string) {
    this.store.select(selectCategories).subscribe((caregories) => {
      const foundCategories = caregories.filter((category) =>
        category.name.toLowerCase().includes(serchString.toLowerCase())
      );
      let foundSubCategories: IsubCategory[] = [];
      caregories.forEach((category) => {
        foundSubCategories = [
          ...foundSubCategories,
          ...category.subCategories.filter((subcategory) =>
            subcategory.name.toLowerCase().includes(serchString.toLowerCase())
          ),
        ];
      });
      this.categories = [...foundCategories, ...foundSubCategories];
      return [...foundCategories, ...foundSubCategories];
    });
  }

  findCategory(subCategoryId: string): Icategory | null {
    let result: Icategory | undefined;
    this.store.select(selectCategories).subscribe((categories) => {
      result = categories.find((category) =>
        category.subCategories.find(
          (subcategory) => subcategory.id === subCategoryId
        )
      );
    });
    if (result) return result;
    return null;
  }
}
