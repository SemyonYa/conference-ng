import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  logout() {
    this.authService.logout();
  }
}
