import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUT } from './core/constants/constants';
import { CategoryComponent } from './shop/pages/category/category.component';
import { MainComponent } from './shop/pages/main/main.component';

const routes: Routes = [
  { path: ROUT.ROOT, component: MainComponent },
  { path: ROUT.CATEGORIES, component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
