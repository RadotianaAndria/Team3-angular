import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-top-sale',
  templateUrl: './top-sale.component.html',
  styleUrls: ['./top-sale.component.scss']
})
export class TopSaleComponent implements OnInit {

  products = [];
  constructor(
    private authenticationService: AuthService
  ) { }
  
  async ngOnInit(): Promise<void> {
    const a = this;
    let token:string = sessionStorage.getItem("access_token") ?? "";
    if(await this.authenticationService.getTop5(token) != null){
      let top5 = this.authenticationService.getTop5(token);
      top5.then(function(data){
        a.products = data;
      }) 
    }
  }

}
