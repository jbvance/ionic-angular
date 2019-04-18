import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;
  private _minPasswordLen = 6;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get minPasswordLen() {
    return this._minPasswordLen;
  }

  constructor() { }

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}
