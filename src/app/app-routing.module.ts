import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignComponent } from './pages/sign/sign.component';
import { CashClosingComponent } from './pages/cash-closing/cash-closing.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
    path: "sign",
    children: [
      {
        path: "",
        component: SignComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
