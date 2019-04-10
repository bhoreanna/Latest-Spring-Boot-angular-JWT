import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { UserAuthService } from 'src/app/shared/user-auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  private user: User;
  constructor(private _router: Router,  private userAuthService: UserAuthService) { }

  ngOnInit() {
    this.user = new User();
    this. resetForm();
  }

  resetForm(form?: NgForm) {
          if (form != null) {
            form.reset();
          }
            this.user = {
          userName: '',
          password: '',
          email: '',
          firstName: '',
          lastName: '',
          userRole: ''
        };


      }

      onFormSubmit() {
        console.log('User Name:' + this.user.userName);
        console.log('Password:' + this.user.password);
        console.log('First Name:' + this.user.firstName);
        console.log('Last Name:' + this.user.lastName);


        this.userAuthService.newUser(this.user).subscribe((data: User) => {
          console.log('data:' + data.userName);
          this._router.navigate(['home/userList']);
        });

      }

}
