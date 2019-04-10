import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { UserAuthService } from 'src/app/shared/user-auth.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: any[];
flag = false;
  constructor(private _router: Router, private userAuthService: UserAuthService) { }

  ngOnInit() {
    this.flag = true;

    this.userAuthService.getUserList().subscribe((users: any) => {
      console.log(users);
      this.users = users;
    }, (error) =>  {
      console.log(error);
    });
  }

  deleteUser(user: User) {
    console.log('You Press Delete Button :' + user.userName);

    this.userAuthService.deleteUser(user).subscribe((data: any) => {
      console.log('data:' + data);
      if (data === true) {
        console.log('i am in if ');
       console.log('after toastr Method ');
      // this._router.navigate(['/userList']);
      this._router.navigate(['/userList']);

      } else {
        console.log('Deletetion operation Faild Please Try Again....!');

      }
    }, ( error ) =>  {

      console.log('Error Is Getting BackEnd', error);
    });


}
  updateUser(user) {
    console.log('You Press Update Button :' + user.userName);

    const u: User = {
      userName: user.userName,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      userRole: user.userRole
    };
    console.log('after conversion User name :' + u.userName);

    this.userAuthService.setter(u);
    console.log('after setter method in update student');
    this._router.navigate(['/editUser']);

  }

}
