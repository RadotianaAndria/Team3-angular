import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(
    private authenticationService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }
  async onSubmit(): Promise<any> {
    console.log("-----login-----");
    const { username, password } = this.form;
    this.isLoginFailed = false;
    if (await this.authenticationService.authenticate(username, password)) {
      // this.router.navigate(['list']);
      console.log("login ok");
    } else {
      this.isLoginFailed = true;
      this.errorMessage = "Identifiants incorrects !";
      console.log("login ko")
    }
  }

  async handleLogin() {
    
  }

}
