import { Component, OnInit } from '@angular/core';
import { UserRole } from '../models/user-role';
import { Router } from '@angular/router';
import { UserAuthService } from '../shared/user-auth.service';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-registor',
  templateUrl: './registor.component.html',
  styleUrls: ['./registor.component.scss']
})
export class RegistorComponent implements OnInit {
  userRoleList: UserRole[] = [];
  user: User;
  public emailPattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private router: Router, private userAuthService: UserAuthService) { }

  ngOnInit() {

    this.userAuthService.getUserRoleList().subscribe((userRoleList: any) => {
      this.userRoleList = userRoleList;
      console.log('USER ROLE LIST', this.userRoleList );
  }, (error) =>  {
    console.log(error);
  });
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

  onSubmit(form: NgForm ) {
    console.log('i am in submit form button');
    console.log('User Role: ', form.value.userRole);

    console.log('User Registor Object: ', this.user);
    this.userAuthService.registerUser(this.user).subscribe((data: any) => {
      console.log('data:' + data);
      if (data === true) {
        console.log('i am in if ');
        this. resetForm();
       console.log('after toastr Method ');
       this.router.navigate(['/signin']);

      } else {
        console.log('Registration Failed Please Try Again....!');

      }
    }, ( error ) =>  {
      console.log(error);
    });
  }

}
