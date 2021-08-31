import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CategoryComponent } from './pages/category/category.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { WaitListComponent } from './pages/wait-list/wait-list.component';



@NgModule({
  declarations: [
    MainComponent,
    DetailComponent,
    CategoryComponent,
    FeaturedComponent,
    WaitListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
