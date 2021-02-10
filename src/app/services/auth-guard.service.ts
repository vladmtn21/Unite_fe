import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor() { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    const token=window.localStorage.getItem('token');
    console.log(route);
    return token ? true : false;
  }


}
