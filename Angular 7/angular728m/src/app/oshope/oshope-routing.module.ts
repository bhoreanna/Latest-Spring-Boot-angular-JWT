import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSucessComponent } from './order-sucess/order-sucess.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ShoppingDashboardComponent } from './shopping-dashboard/shopping-dashboard.component';
import { PaypalComponent } from './paypal/paypal.component';
import { SortingComponent } from './admin/sorting/sorting.component';

const routes: Routes = [

  { path: '', component: ShoppingDashboardComponent, children: [


    { path: 'products' , component: ProductsComponent },
    { path: 'shopping-cart' , component: ShoppingCartComponent },
     { path: 'check-out' , component: CheckOutComponent },
    { path: 'order-success/:id' , component: OrderSucessComponent },
    { path: 'my/orders' , component: MyOrderComponent },
    { path: 'admin-orders' , component: AdminOrdersComponent },
    { path: 'admin/product/new' , component: ProductFormComponent },
    { path: 'admin/product/:id' , component: ProductFormComponent },
    { path: 'admin-products' , component: AdminProductsComponent },
    { path: 'paypal' , component: PaypalComponent },
    { path: 'sorting' , component: SortingComponent },

  ]},


  // { path: 'products' , component: ProductsComponent },
  // { path: 'shopping-cart' , component: ShoppingCartComponent },
  //  { path: 'check-out' , component: CheckOutComponent },
  // { path: 'order-success/:id' , component: OrderSucessComponent },
  // { path: 'my/orders' , component: MyOrderComponent },
  // { path: 'admin-orders' , component: AdminOrdersComponent },
  // { path: 'admin/product/new' , component: ProductFormComponent },
  // { path: 'admin/product/:id' , component: ProductFormComponent },
  // { path: 'admin-products' , component: AdminProductsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OshopeRoutingModule {
  constructor() {
    console.log('Loding...! OshopeRoutingModule');
  }
}
