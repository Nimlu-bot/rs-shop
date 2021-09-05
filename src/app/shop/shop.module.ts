import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MainComponent } from './pages/main/main.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CategoryComponent } from './pages/category/category.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { WaitListComponent } from './pages/wait-list/wait-list.component';
import { CategoriesReducer } from '../redux/reducers/categories.reducer';
import { SliderComponent } from './components/slider/slider.component';
import { PopularComponent } from './components/popular/popular.component';

@NgModule({
  declarations: [
    MainComponent,
    DetailComponent,
    CategoryComponent,
    FeaturedComponent,
    WaitListComponent,
    SliderComponent,
    PopularComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('categoriesState', CategoriesReducer),
  ],
})
export class ShopModule {}
