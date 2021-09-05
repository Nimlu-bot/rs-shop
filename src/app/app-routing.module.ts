import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUT } from './core/constants/constants';
import { CategoryComponent } from './shop/pages/category/category.component';
import { FeaturedComponent } from './shop/pages/featured/featured.component';
import { MainComponent } from './shop/pages/main/main.component';
import { WaitListComponent } from './shop/pages/wait-list/wait-list.component';

const routes: Routes = [
  { path: ROUT.ROOT, component: MainComponent },
  { path: ROUT.CATEGORIES, component: CategoryComponent },
  { path: ROUT.FEATURED, component: FeaturedComponent },
  { path: ROUT.WAIT, component: WaitListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
