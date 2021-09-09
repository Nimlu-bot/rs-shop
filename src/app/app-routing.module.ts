import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUT } from './core/constants/constants';
import { CategoryComponent } from './shop/pages/category/category.component';
import { FavoriteComponent } from './shop/pages/favorite/favorite.component';
import { MainComponent } from './shop/pages/main/main.component';
import { WaitListComponent } from './shop/pages/wait-list/wait-list.component';
import { GoodsComponent } from './shop/pages/goods/goods.component';
import { DetailComponent } from './shop/pages/detail/detail.component';

const routes: Routes = [
  { path: ROUT.ROOT, component: MainComponent },
  { path: ROUT.CATEGORIES, component: CategoryComponent },
  { path: ROUT.FAVORITE, component: FavoriteComponent },
  { path: ROUT.WAIT, component: WaitListComponent },
  { path: ROUT.GOODS, component: GoodsComponent },
  { path: ROUT.DETAIL, component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
