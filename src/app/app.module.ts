import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { TopSaleComponent } from './home/top-sale/top-sale.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
<<<<<<< HEAD
import { PanierComponent } from './panier/panier.component';
=======
import { ListProductComponent } from './list-product/list-product.component';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
>>>>>>> 46623bb84b363b7e0f6dee67ccfb0c886ccb48dc

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    HomeComponent,
    BannerComponent,
    TopSaleComponent,
    LoginComponent,
    RegisterComponent,
    BoardAdminComponent,
<<<<<<< HEAD
    PanierComponent
=======
    ListProductComponent
>>>>>>> 46623bb84b363b7e0f6dee67ccfb0c886ccb48dc
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
