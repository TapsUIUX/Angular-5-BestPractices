import { Injectable } from '@angular/core';
import { CanActivate ,CanActivateChild, CanDeactivate} from '@angular/router';


@Injectable()
export class RouteguardService implements CanActivate  {

  constructor() { }

  // canActivateChild():boolean {
  //   return false;
  //   //return confirm('Are you sure you want to see it ?');
  // }

  canActivate():boolean {
    return confirm('Are you sure you want to see it ?');
  }

}
