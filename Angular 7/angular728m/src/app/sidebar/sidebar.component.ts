import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../shared/user-auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
userName = 'anna';
  constructor(public userAuthService: UserAuthService) { }

  ngOnInit() {
    console.log('User Login: ', this.userAuthService.isLogIn() );
    this.userName = localStorage.getItem('auth');
   // console.log('this.userName in side bar' , this.userName);
  }


  getUserName() {
   // console.log('getting user name set to side bar', sessionStorage.getItem('auth') );
    return sessionStorage.getItem('auth');
  }
}
