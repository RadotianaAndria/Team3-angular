import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface LoginResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

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
}
