import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-top-sale',
  templateUrl: './top-sale.component.html',
  styleUrls: ['./top-sale.component.scss']
})
export class TopSaleComponent implements OnInit {

  constructor(
    private authenticationService: AuthService
  ) { }
  
  async ngOnInit(): Promise<void> {
    console.log("Bienvenue");
    if(await this.authenticationService.getTop5() != null){
      let top5 = this.authenticationService.getTop5();
      top5.then(function(data){
        console.log(data[0]);
      }) 
    }
  }

}
