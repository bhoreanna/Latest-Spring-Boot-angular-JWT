import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageNewComponent } from './message-new/message-new.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatIconModule, MatInputModule, MatStepperModule, MatButtonModule, MatFormFieldModule, MatAutocompleteModule } from '@angular/material';
@NgModule({
  declarations: [MessageListComponent, MessageNewComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatAutocompleteModule,
  ]
})
export class MessagesModule {

  constructor(){
    console.log('Loading MessagesModule');

  }
 }
