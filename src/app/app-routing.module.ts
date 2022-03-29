import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { PanierComponent } from './panier/panier.component';

import { ListProductComponent } from './list-product/list-product.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {path: "", component: LoginComponent},
  { path: "panier", component: PanierComponent, canActivate: [AuthGuardService] },
  {path: "", component: LoginComponent},
  { path: "home", component: HomeComponent, canActivate: [AuthGuardService] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "bo-admin", component: BoardAdminComponent, canActivate: [AuthGuardService]},
  { path: "products", component: ListProductComponent, canActivate: [AuthGuardService]},
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
