import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (localStorage.getItem("token")) {
      return true;
    }
    this.router.navigate(['/login']);

  }
  
}