import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignComponent } from './pages/sign/sign.component';
import { PerformanceComponent } from './pages/performance/performance.component';

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
    path: "performance",
    children: [
      {
        path: "",
        component: PerformanceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
