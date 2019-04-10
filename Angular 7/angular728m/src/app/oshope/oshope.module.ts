import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OshopeRoutingModule } from './oshope-routing.module';
import { ShoppingDashboardComponent } from './shopping-dashboard/shopping-dashboard.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSucessComponent } from './order-sucess/order-sucess.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductsComponent } from './products/products.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { CategoryService } from './share/category-service/category.service';
import { ProductsService } from './share/products/products.service';
import { OrderService } from './share/order-service/order.service';
import { ShoppingCartService } from './share/shopping-cart/shopping-cart.service';
import { AuthService } from './share/auth.service';
import { FormsModule } from '@angular/forms';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';


import {MatTableModule} from '@angular/material/table';
import { PaypalComponent } from './paypal/paypal.component';
import { MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule,
  MatDialogModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { CustomMaterialModule } from '../core/custom-material/custom-material.module';
import { SortingComponent } from './admin/sorting/sorting.component';
import { NotificationService } from './share/notification.service';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { DialogService } from './share/dialog.service';
@NgModule({
  declarations: [ShoppingDashboardComponent,
     BsNavbarComponent,
     AdminOrdersComponent,
     AdminProductsComponent,
     ProductFormComponent,
     CheckOutComponent,
     OrderSucessComponent,
     ProductCartComponent,
     ProductsComponent,
     ProductFilterComponent,
     ShoppingCartComponent,
     MyOrderComponent,
     PaypalComponent,
     SortingComponent,
     MatConfirmDialogComponent,
  ],
  imports: [
    CommonModule,

    OshopeRoutingModule,
    FormsModule,
     CustomMaterialModule,
    AngularDateTimePickerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,

  ],
  providers: [
    CategoryService,
    ProductsService,
    OrderService,
    ShoppingCartService,
    AuthService,
    NotificationService,
    DialogService,
  ],
  entryComponents: [ProductFormComponent , MatConfirmDialogComponent]

})
export class OshopeModule {
  constructor() {
     console.log('Loding ...! OshopeModule');
  }
}
