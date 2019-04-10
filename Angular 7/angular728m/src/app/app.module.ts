import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/custom-material/custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistorComponent } from './registor/registor.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserListComponent } from './user/user-list/user-list.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { HttpIntercepterBasicAuthService } from './http/http-intercepter-basic-auth.service';
import { MatPaginatorModule,
  MatSortModule, 
  MatTableModule,      MatIconModule,
  MatDialogModule, 

  MatSnackBarModule,
   MatTooltipModule, 
   MatProgressBarModule, 
   MatProgressSpinnerModule,
    MatChipsModule, 
    MatButtonToggleModule,
     MatExpansionModule, 
     MatTabsModule, 
     MatStepperModule, 
     MatCardModule, 
     MatGridListModule, 
     MatListModule, 
     MatToolbarModule, 
     MatSidenavModule,
      MatMenuModule, 
      MatSlideToggleModule, 
      MatSliderModule, 
      MatSelectModule,
       MatRadioModule,
        MatFormFieldModule, 
        MatDatepickerModule,
         MatAutocompleteModule, 
         MatCheckboxModule, 
         MatButtonModule, 
         MatInputModule 
       } from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ScreenModulesComponent } from './screen-modules/screen-modules.component';
import { ScreenModuleComponent } from './screen-modules/screen-module/screen-module.component';
import { ScreenMastersComponent } from './screen-masters/screen-masters.component';
import { ScreenModuleListComponent } from './screen-modules/screen-module-list/screen-module-list.component';
import { ScreenMasterComponent } from './screen-masters/screen-master/screen-master.component';
import { ScreenMasterListComponent } from './screen-masters/screen-master-list/screen-master-list.component';
import { ShareMatConfirmDialogComponent } from './sh-mat-confirm-dialog/share-mat-confirm-dialog/share-mat-confirm-dialog.component';
import { SiderComponent } from './sider/sider.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    HeaderComponent,
    ErrorComponent,
    ListTodosComponent,
    EditTodoComponent,
    FooterComponent,
    LogoutComponent,
    RegistorComponent,
    UserListComponent,
    EditUserComponent,
    NewUserComponent,
    SidebarComponent,
    ScreenModulesComponent,
    ScreenModuleComponent,
    ScreenModuleListComponent,
    ScreenMastersComponent,
    ScreenMasterComponent,
    ScreenMasterListComponent,
    ShareMatConfirmDialogComponent,
    SiderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,

    MatTooltipModule, 
    MatProgressBarModule, 
    MatProgressSpinnerModule,
     MatChipsModule, 
     MatButtonToggleModule,
      MatExpansionModule, 
      MatTabsModule, 
      MatStepperModule, 
      MatCardModule, 
      MatGridListModule, 
      MatListModule, 
      MatToolbarModule, 
      MatSidenavModule,
       MatMenuModule, 
       MatSlideToggleModule, 
       MatSliderModule, 
       MatSelectModule,
        MatRadioModule,
         MatFormFieldModule, 
         MatDatepickerModule,
          MatAutocompleteModule, 
          MatCheckboxModule, 
          MatButtonModule, 
          MatInputModule 
   



  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true }
  ],
  entryComponents: [ScreenModuleComponent , ScreenMasterComponent , ShareMatConfirmDialogComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
