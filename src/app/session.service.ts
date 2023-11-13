// session.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();
  private usernameSubject = new BehaviorSubject<string>('');
  username$: Observable<string> = this.usernameSubject.asObservable();

  constructor() {
    this.isAuthenticatedSubject.next(localStorage.getItem('isAuthenticated') === 'true');
    this.usernameSubject.next(localStorage.getItem('username') || '');
  }

  login(username: string) {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('username', username);
    this.isAuthenticatedSubject.next(true);
    this.usernameSubject.next(username);
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    this.isAuthenticatedSubject.next(false);
    this.usernameSubject.next('');
  }
}
