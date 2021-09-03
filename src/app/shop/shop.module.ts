import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MainComponent } from './pages/main/main.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CategoryComponent } from './pages/category/category.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { WaitListComponent } from './pages/wait-list/wait-list.component';
import { CategoriesReducer } from '../redux/reducers/categories.reducer';

@NgModule({
  declarations: [
    MainComponent,
    DetailComponent,
    CategoryComponent,
    FeaturedComponent,
    WaitListComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('categoriesState', CategoriesReducer),
  ],
})
export class ShopModule {}
