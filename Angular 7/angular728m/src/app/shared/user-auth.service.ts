import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { iif } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import {map} from 'rxjs/operators';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'auth';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private baseUrl = 'http://localhost:9991';
  user: User;

  constructor(private _http:  HttpClient) { }



  isLogIn() {
    const user = sessionStorage.getItem('auth');
      return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('auth');
    sessionStorage.removeItem(TOKEN);

  }


  // login(user: User) {
  //   console.log('i am in user service User name: ' + user.userName );
  // return this._http.post(this.baseUrl + '/loginUser', user);

  // }

  login(user: User) {

    console.log('********** UserAuthService *******************');


    const username = user.userName;
    const password = user.password;

    console.log('User name: ', username);
    console.log('password: ', password);


    return this._http.post<any>(

      this.baseUrl + '/authenticate', {
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
    // console.log("Execute Hello World Bean Service")
  }



  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }


  registerUser(user: User) {
    console.log(' in userService', user);
    console.log('User Role in Service', user.userRole);


  return this._http.post(this.baseUrl + '/registorUser', user);

}


getUserRoleList() {
  console.log('Call http Request getUserRoleList: ');

  return this._http.get(this.baseUrl + '/userRoleList');
}

getUserList() {
  return this._http.get(this.baseUrl + '/userList');

}
updateUser(user: User) {
  console.log('i am in UPDATE user service User name: ' + user.userName );

  return this._http.post(this.baseUrl + '/updateUser', user);

}


getUser( userName: string) {
  console.log('call http getUser: ', userName);
return this._http.post(this.baseUrl + '/getUser', userName);

}

newUser(user: User) {
console.log('i am in NEW user service User name: ' + user.userName );

return this._http.post(this.baseUrl + '/newUser', user);

}

deleteUser(user: User) {
console.log('i am in DeleteUser service User name: ' + user.userName );
// return this._http.delete(this.baseUrl + '/deleteUser' + user.userName);

return this._http.get(this.baseUrl + '/deleteUser/' + user.userName);

}
public getName () {
  console.log('User Name in Service' , sessionStorage.getItem(AUTHENTICATED_USER));
  return sessionStorage.getItem(AUTHENTICATED_USER);
}

setter(user: User) {
  this.user = user;
  }
  getter() {
    return this.user;
  }

}
