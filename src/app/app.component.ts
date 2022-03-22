import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lamba';

  currentRoute: string = "";

  constructor(private router: Router){
      this.router.events.subscribe((event:Event) => {
        if(event instanceof NavigationEnd ){
          this.currentRoute = event.url;
        }
      }); 
  }

}
