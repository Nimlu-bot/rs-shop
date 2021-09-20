import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { AngularDropdownModule } from 'angular-dropdown';
import { SwiperModule } from 'swiper/angular';
import { MainComponent } from './pages/main/main.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CategoryComponent } from './pages/category/category.component';
import { WaitListComponent } from './pages/wait-list/wait-list.component';
import { CategoriesReducer } from '../redux/reducers/categories.reducer';
import { GoodsComponent } from './pages/goods/goods.component';
import { GoodsReducer } from '../redux/reducers/goods.reducer';
import { CardComponent } from './components/card/card.component';
import { AppStarsDirective } from './directives/star.directive';
import { ColorDirective } from './directives/amount.directive';
import { SortComponent } from './components/sort/sort.component';
import { SortOrderPipe } from './pipes/sort-order.pipe';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { AuthReducer } from '../redux/reducers/auth.reducer';
import { FavoriteCardComponent } from './components/favorite-card/favorite-card.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { CartFormComponent } from './components/cart-form/cart-form.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { WaitCardComponent } from './components/wait-card/wait-card.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { VideoComponent } from './components/video/video.component';
import { PopularComponent } from './components/popular/popular.component';
import { PopularCardComponent } from './components/popular-card/popular-card.component';

@NgModule({
  declarations: [
    MainComponent,
    DetailComponent,
    CategoryComponent,
    WaitListComponent,
    GoodsComponent,
    CardComponent,
    AppStarsDirective,
    ColorDirective,
    SortComponent,
    SortOrderPipe,
    FavoriteComponent,
    FavoriteCardComponent,
    CartCardComponent,
    CartComponent,
    CartFormComponent,
    ConfirmComponent,
    WaitCardComponent,
    EditOrderComponent,
    BenefitsComponent,
    VideoComponent,
    PopularComponent,
    PopularCardComponent,
  ],
  imports: [
    CommonModule,
    NgImageSliderModule,
    FormsModule,
    MyDatePickerModule,
    ReactiveFormsModule,
    AngularDropdownModule,
    SwiperModule,
    StoreModule.forFeature('categoriesState', CategoriesReducer),
    StoreModule.forFeature('goodsState', GoodsReducer),
    StoreModule.forFeature('authState', AuthReducer),
  ],
})
export class ShopModule {}
