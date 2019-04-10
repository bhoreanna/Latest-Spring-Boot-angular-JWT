import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../shared/user-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private userAuthService: UserAuthService) { }

  ngOnInit() {
    this.userAuthService.logout();
  }

}
