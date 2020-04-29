import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ACCESS_TOKEN_NAME = 'CONFERENCE_ACCESS_TOKEN';
  REFRESH_TOKEN_NAME = 'CONFERENCE_REFRESH_TOKEN';
  USER_DATA_NAME = 'CONFERENCE_USER_DATA';
  loggedIn$ = new BehaviorSubject<User>(null);
  constructor(private router: Router) { }

  init() {
    this.loggedIn$.next(this.userDataFromStorage());
  }

  accessTokenToStorage(token: string): void {
    localStorage.setItem(this.ACCESS_TOKEN_NAME, JSON.stringify(token));
  }

  refreshTokenToStorage(token: string): void {
    localStorage.setItem(this.REFRESH_TOKEN_NAME, JSON.stringify(token));
  }

  userDataToStorage(userData: any) {
    if (userData === null) {
      localStorage.setItem(this.USER_DATA_NAME, JSON.stringify(null));
      this.loggedIn$.next(null);
    } else {
      let user = User.create(userData.id, userData.login, userData.role, userData.personId, userData.personSurname, userData.personName, userData.personName2);
      localStorage.setItem(this.USER_DATA_NAME, JSON.stringify(user));
      this.loggedIn$.next(user);
    }
  }

  accessTokenFromStorage(): string {
    return JSON.parse(localStorage.getItem(this.ACCESS_TOKEN_NAME));
  }

  refreshTokenFromStorage(): string {
    return JSON.parse(localStorage.getItem(this.REFRESH_TOKEN_NAME));
  }

  userDataFromStorage(): User {
    return JSON.parse(localStorage.getItem(this.USER_DATA_NAME)) as User;
  }

  login(data: any) {
    this.accessTokenToStorage(data.access);
    this.refreshTokenToStorage(data.refresh);
    this.userDataToStorage(data.user);
    this.router.navigateByUrl('/');
  }

  logout() {
    this.accessTokenToStorage(null);
    this.refreshTokenToStorage(null);
    this.userDataToStorage(null);
    this.router.navigateByUrl('/');
  }
}
