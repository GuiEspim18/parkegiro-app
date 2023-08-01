import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public entrance: any = [
    {
      model: "Pegeout 308 - Pérola",
      sign: "ABC-1D23",
      entrance: "18:00"
    },
    {
      model: "Nissan March - Cinza",
      sign: "FCV-3596",
      entrance: "18:00"
    },
    {
      model: "Honda fit - Cinza",
      sign: "EEW-2H28",
      entrance: "18:00"
    },
  ]

  public exit: any = [
    {
      model: "Pegeout 308 - Pérola",
      sign: "GBR-9F90",
      exit: "18:30"
    },
    {
      model: "Nissan March - Cinza",
      sign: "FCV-3596",
      exit: "18:30"
    },
    {
      model: "Honda fit - Cinza",
      sign: "EEW-2H28",
      exit: "18:30"
    },
  ]

  constructor(private readonly authService: AuthService) { }

  public ngOnInit(): void {
    this.authService.verify();
  }

}
