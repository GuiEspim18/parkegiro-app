import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ParkingComponent } from './pages/parking/parking.component';
import { CashClosingComponent } from './pages/cash-closing/cash-closing.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ConfigurationsComponent } from './pages/configurations/configurations.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    children: [
      {
        path: "",
        component: HomeComponent
      }
    ]
  },
  {
    path: "parking",
    children: [
      {
        path: "",
        component: ParkingComponent
      }
    ]
  },
  {
    path: "cash-closing",
    children: [
      {
        path: "",
        component: CashClosingComponent
      }
    ]
  },
  {
    path: "dash-board",
    children: [
      {
        path: "",
        component: DashBoardComponent
      }
    ]
  },
  {
    path: "users",
    children: [
      {
        path: "",
        component: UsersComponent
      }
    ]
  },
  {
    path: "profile",
    children: [
      {
        path: "",
        component: ProfileComponent
      }
    ]
  },
  {
    path: "config",
    children: [
      {
        path: "",
        component: ConfigurationsComponent
      }
    ]
  },
  {
    path: "login",
    children: [
      {
        path: "",
        component: LoginComponent
      }
    ]
  },
  {
    path: "register",
    children: [
      {
        path: "",
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
