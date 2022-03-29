import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  { path: "home", component: HomeComponent },
  { path: "panier", component: PanierComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {path: "bo-admin", component: BoardAdminComponent},
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
