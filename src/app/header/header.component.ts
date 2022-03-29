import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categories = [];
  keyword: string = '';

  constructor(
    private authenticationService: AuthService,
    private route: Router
  ){ }  

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

  redirectTo(uri:string): void {
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.route.navigate([uri]));
 }

  search(): void {
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.route.navigate(['/products'], {queryParams: {keyword: this.keyword} }));  
  }

}
