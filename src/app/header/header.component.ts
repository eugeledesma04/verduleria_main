// header.component.ts
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  username: string = '';

  constructor(private sessionService: SessionService, private router: Router) {}

  ngOnInit() {
    this.sessionService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });

    this.sessionService.username$.subscribe((username) => {
      this.username = username;
    });
  }

  onLogout() {
    this.sessionService.logout();

    this.router.navigate(['/']);
  }
}
