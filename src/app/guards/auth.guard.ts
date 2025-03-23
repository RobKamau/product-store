import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // Check if the currentUser exists in UserService (i.e., the user is logged in)
    const currentUser = this.userService.getCurrentUser();

    // If no current user, redirect to home (or login page)
    if (!currentUser) {
      this.router.navigate(['/']);
      return false;
    }

    // Allow navigation if the user is logged in
    return true;
  }
}