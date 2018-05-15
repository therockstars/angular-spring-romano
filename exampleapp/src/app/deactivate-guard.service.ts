import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {Observable} from 'rxjs';

@Injectable()
export class DeactivateGuardService implements CanDeactivate<LoginComponent> {

  constructor() {
  }

  canDeactivate(component: LoginComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return window.confirm('Do you want to leave?');

  }

}
