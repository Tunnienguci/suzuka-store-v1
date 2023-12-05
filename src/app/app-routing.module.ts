import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { OrderComponent } from './pages/order/order.component';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'quan-ly-san-pham',
    component: ProductComponent,
  },
  {
    path: 'quan-ly-don-hang',
    component: OrderComponent,
  },
  {
    path: 'quan-ly-danh-muc',
    component: CategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
