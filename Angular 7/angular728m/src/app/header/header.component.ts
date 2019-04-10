import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../shared/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public userAuthService: UserAuthService) {
    console.log('HeaderComponent loading...!');
   }

  ngOnInit() {

    console.log('User Login: ', this.userAuthService.isLogIn() );
    if (this.userAuthService.isLogIn()) {
    }
  }


  onSaveData() {
  }

  onFetchData() {
  }

  logout() {
  }

}
