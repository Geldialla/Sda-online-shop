import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './share/login/login.component';
import { AdminpageComponent } from './admin/admin-page/adminpage.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { UsersComponent } from './admin/users/users.component';
import { ProductsComponent } from './admin/products/products.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { CategoryListComponent } from './admin/category-list/category-list.component';
import { OrderListComponent } from './admin/order-list/order-list.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { SdaHttpClientModule } from './services/data-layer/sda-be-mock.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './user/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminpageComponent,
    OrdersComponent,
    UsersComponent,
    ProductsComponent,
    CategoriesComponent,
    ProductListComponent,
    CategoryListComponent,
    OrderListComponent,
    UserListComponent,
    NavBarComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SdaHttpClientModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
