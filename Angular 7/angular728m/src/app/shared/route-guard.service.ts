import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {


  // : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;


  constructor(private userAuthService: UserAuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.userAuthService.isLogIn()) {
          return true;
      } else {
        return false;
      }
  }
}
