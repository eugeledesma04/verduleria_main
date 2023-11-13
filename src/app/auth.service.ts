import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'http://localhost:8080/auth';

  constructor(private http: HttpClient, private sessionService: SessionService) {}

  login(username: string, password: string) {
    const loginData = {
      username: username,
      password: password,
    };

    return this.http.post(`${this.baseUrl}/login`, loginData).pipe(
      tap(() => {

        this.sessionService.login(username);  
      })
    );
  }

  register(user: any) {
    return this.http.post(`${this.baseUrl}/register`, user);
  }
}
