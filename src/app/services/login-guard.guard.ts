import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardGuard implements CanActivate {
  constructor(private adminService: AdminService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (JSON.parse(localStorage.getItem('isLoggedIn') as string) === true) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
