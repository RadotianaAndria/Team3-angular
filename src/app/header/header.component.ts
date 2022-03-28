import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthService) { }
  categories = [];
  async ngOnInit(): Promise<void> {
    const a = this;
    let token:string = sessionStorage.getItem("access_token") ?? "";
    if(await this.authenticationService.getCategories(token) != null){
      let categories = this.authenticationService.getCategories(token);
      categories.then(function(data){
        a.categories = data;
      }) 
    }
  }

}
