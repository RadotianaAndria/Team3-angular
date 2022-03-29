import { Injectable } from '@angular/core';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService
  ) { }

  async authenticate(username: string, password: string) {
    console.log("Before login api call");
    let loginResponse = await this.apiService.doLogin(username, password);
    if (loginResponse != null && loginResponse.access_token != null) {
      localStorage.setItem("access_token", loginResponse.access_token);
      return true;
    }
    return false;
  }

  isLoggedIn() {
    let token = localStorage.getItem("access_token");
    return token !== null;
  }

  getToken() {
    return localStorage.getItem("access_token");
  }

  logout() {
    localStorage.removeItem("access_token");
  }
}
