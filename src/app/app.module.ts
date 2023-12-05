import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './common/loading/loading.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { OrderComponent } from './pages/order/order.component';
import { TablesComponent } from './common/tables/tables.component';
import { ModalComponent } from './common/modal/modal.component';
import { ModalProductComponent } from './common/modal-product/modal-product.component';
import { ModalCategoryComponent } from './common/modal-category/modal-category.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalOrderComponent } from './common/modal-order/modal-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    HomeComponent,
    ProductComponent,
    CategoryComponent,
    OrderComponent,
    TablesComponent,
    ModalComponent,
    ModalProductComponent,
    ModalCategoryComponent,
    ModalOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
