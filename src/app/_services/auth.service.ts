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

  async getTop5(){
    let token = sessionStorage.getItem("access_token");
    //console.log("token: "+ token);
    if(await this.apiService.getTop5() != null){
      console.log("products");
      console.log(await this.apiService.getTop5());
      // return true;
    }
    else{
      console.log("Tsy mety");
    }
    return false;
  }
}
