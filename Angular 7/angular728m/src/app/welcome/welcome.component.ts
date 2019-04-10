import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../shared/user-auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public userAuthService: UserAuthService) { }

  ngOnInit() {
  }

}
