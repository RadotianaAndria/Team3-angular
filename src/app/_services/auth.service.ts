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
      console.log("Login successfull");
      sessionStorage.setItem("access_token", loginResponse.access_token);
      return true;
    }
    return false;
  }

  async getTop5(token:string){
    if(await this.apiService.getTop5(token) != null){
      return await this.apiService.getTop5(token);
    }
    return null;
  }

  async getCategories(token:string){
    if(await this.apiService.getCategories(token) != null){
      return await this.apiService.getCategories(token);
    }
    return null;
  }
  async getBanners(token:string){
    if(await this.apiService.getBanners(token) != null){
      return await this.apiService.getBanners(token);
    }
    return null;
  }
}
