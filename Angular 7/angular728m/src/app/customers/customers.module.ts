import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { MatTabsModule, MatIconModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [CustomerListComponent,
     CustomerCardComponent,
      CustomerNewComponent,
    ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class CustomersModule {
  constructor(){
    console.log('Loading CustomersModule');

  }
  
 }
