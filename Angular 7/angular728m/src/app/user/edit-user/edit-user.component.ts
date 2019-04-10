import { UserAuthService } from 'src/app/shared/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
user: User;
  constructor(private _router: Router, private userAuthService: UserAuthService) { }

  ngOnInit() {
    console.log('i am in editUserComponenet ngOnInit:');
    this.user = this.userAuthService.getter();
    console.log('User:' + this.user);
    console.log('user NAme: ' + this.user.userName);
    console.log('user pass: ' + this.user.password);
    console.log('user email: ' + this.user.email);
    console.log('user First name: ' + this.user.firstName);
    console.log('user last name: ' + this.user.lastName);


  }
  onFormSubmit() {
    console.log('User:' + this.user);
    console.log('user NAme: ' + this.user.userName);
    console.log('user pass: ' + this.user.password);
    console.log('user email: ' + this.user.email);
    console.log('user First name: ' + this.user.firstName);
    console.log('user last name: ' + this.user.lastName);
    console.log('OnFormSubmit()');

    this.userAuthService.updateUser(this.user).subscribe((data: User) => {
      console.log('data:' + data.userName);
      this._router.navigate(['/userList']);
    });

  }
}
