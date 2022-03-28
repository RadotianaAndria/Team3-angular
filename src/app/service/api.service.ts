import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface LoginResponse {
  access_token: string;
}

export interface Product {
  name: string;
  price: Float32Array;
  inStock: BigInteger;
  description: string;
  photo: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  product : any;

  constructor(
    private http: HttpClient
  ) { }

  async doLogin(username: string, password: string): Promise<LoginResponse>{
    const url = environment.apiUrl + "login";
    const body = {
      "username": username,
      "password": password
    };
    const options = {
      headers: {'Content-Type' : 'application/json'}
    };

    return await this.http.post<LoginResponse>(url, body, options).toPromise().catch(() => { return null as any });
  }
  async getTop5(access_token:string){
    console.log("token: "+ access_token);
    const url = environment.apiUrl+"products.json";
    console.log("URL de l'API: "+url);
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer "+access_token
      })
    };
    return await this.http.get<Product>(url, httpOptions).toPromise().catch(() => { return null as any});
  }

}
