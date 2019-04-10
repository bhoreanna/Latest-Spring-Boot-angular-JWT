import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { MatTabsModule, MatIconModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatCardModule,  MatDatepickerModule } from '@angular/material';
import { OrderNewComponent } from './order-new/order-new.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatMomentDateModule } from '@angular/material-moment-adapter';
@NgModule({
  declarations: [OrderListComponent, OrderNewComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
        MatMomentDateModule, 
    



  ]
})
export class OrdersModule {

  constructor(){
    console.log('Loading OrdersModule');

  }
 }
