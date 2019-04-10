import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './shared/route-guard.service';
import { RegistorComponent } from './registor/registor.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { ScreenModulesComponent } from './screen-modules/screen-modules.component';
import { ScreenModuleComponent } from './screen-modules/screen-module/screen-module.component';
import { ScreenModuleListComponent } from './screen-modules/screen-module-list/screen-module-list.component';
import { ScreenMasterComponent } from './screen-masters/screen-master/screen-master.component';
import { ScreenMastersComponent } from './screen-masters/screen-masters.component';
import { ScreenMasterListComponent } from './screen-masters/screen-master-list/screen-master-list.component';




const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent, canActivate: [RouteGuardService]},
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: RegistorComponent},
  { path: 'userList', component: UserListComponent , canActivate: [RouteGuardService]},
    { path: 'editUser', component: EditUserComponent , canActivate: [RouteGuardService]  },
    { path: 'newUser', component: NewUserComponent , canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},

  {path: 'todo', component: ListTodosComponent , canActivate: [RouteGuardService]},
  {path: 'edit-todo', component: EditTodoComponent , canActivate: [RouteGuardService]},
  {path: 'edit-todo/:id', component: EditTodoComponent , canActivate: [RouteGuardService]},

  { path: 'screen-modules', component: ScreenModulesComponent, canActivate: [RouteGuardService]},

  { path: 'screen-module', component: ScreenModuleComponent, canActivate: [RouteGuardService]},

  { path: 'screen-module-list', component: ScreenModuleListComponent, canActivate: [RouteGuardService]},


  { path: 'screen-masters', component: ScreenMastersComponent, canActivate: [RouteGuardService]},

  { path: 'screen-master', component: ScreenMasterComponent, canActivate: [RouteGuardService]},

  { path: 'screen-master-list', component: ScreenMasterListComponent, canActivate: [RouteGuardService]},

  {path: 'shopping', loadChildren: './oshope/oshope.module#OshopeModule' },

  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  },
  {
    path: 'messages',
    loadChildren: './messages/messages.module#MessagesModule'
  },
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {

  constructor() {
    console.log('Loading AppRoutingModule....!');
  }
}
