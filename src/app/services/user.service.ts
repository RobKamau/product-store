import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  // Set a user as logged in
  login(user: User): void {
    this.currentUserSubject.next(user);
  }

  // Log the user out
  logout(): void {
    this.currentUserSubject.next(null);
  }

  // Get the current logged-in user
  getCurrentUser(): User | null {
    return this.currentUserSubject.getValue();
  }
}