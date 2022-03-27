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
  async getTop5(){
    var access_token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJwcmluY2lwYWwiOiJINHNJQUFBQUFBQUFBSlZTdlVcL2JRQlJcL2RvTkFpc1JIcFZaaW9FdnBoaHlKanBrZ1NxdFdWcWdJV1VBQ1hleUhPVGpmbWJzekpFdVZxUjBZcU5vaVZlckt5SDhDU1wvK0FxZ3lzekt5OE13R25YVkJ2c3RcLzlcL1B0NlBydUdNYVBoZGFJWkZ5YklSSjV3R1poTWM1a1lqSExOYlRcL0lEZW9ZYllGNFd3QTdOSUc3NFwvbmdoZUR6Mk1MVGNKY2RzSnBnTXFtdGRIY3hzdldlaGtXbGt5SGp0bVlwSGlxOUZ6eHdSMHJqWHdJbHRYZnF3XC9nNnpMQW9Vcm0wTFNXYnZZeHJqTmRodXB5Rkt0cHpvMmNSM2FDMG5Ba3pDaDFIeWJvQzR4Q3FMTGM3aWxRNUdndFRkMlp6eTBXdGpiWWV3a1RHakNGM1wveVJwVzJmZDNUdWJraExzdzBlbzlES1BEblgzeWtFRHh4TTBsQkNVbWl0cDVqc3lWVEhmNWs2YytBZHpYMzhkXC94eDBmQURxWk9IeGI4cjU3RElNempkdlhoUkZlNUdGNXlQV1MxaTlsNUdibVpKNVRhTlRcL3Yzanc3ZVQ2ODhiVDBqWklkNzhcL3o3bWw0Yk45UnNxelpobVZvM3NpR2dQSys2WnlKY2ZKN1wvZlFqOW84elFUU0grVXRCZ1wvU0pURUZMZWlsYmp2MjBKMWRTVnNialhDZDgzV21udXZyTEpZa2Vwa0VkcHRLd2dWN2VybzZzdkY4Y3NcL3hQQWV4ZzZZeUpFNm55NUJyVHp0b3Y1MGRqSlhcL1g1NVZDUVlcL3MzK0xYTEtLYXNSQXdBQSIsInN1YiI6IlJhZG8iLCJyb2xlcyI6WyJST0xFX0NMSUVOVCJdLCJpc3MiOiJTcHJpbmcgU2VjdXJpdHkgUkVTVCBHcmFpbHMgUGx1Z2luIiwiZXhwIjoxNjQ4NDAyNDIwLCJpYXQiOjE2NDgzOTg4MjB9.CCgaIk2_k9jt0DbHdYapOmyMWyOfUmjkKVM4GESGxtI";
    const url = environment.apiUrl+"products.json";
    console.log("URL de l'API: "+url);
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': access_token
      })
    };
    return await this.http.get<Product>(url, httpOptions).toPromise().catch(() => { return null as any});
    /*this.http.get(url, httpOptions).subscribe(async data => {
      console.log("Niditra");
      this.product = data;
      return await this.product;
    });*/
    return null;
    // console.log("url de l'API: "+url);
    // return await this.http.get<Product>(url).toPromise().catch(() => { return null as any});
  }

}
