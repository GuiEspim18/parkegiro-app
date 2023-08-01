import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-cash-closing',
  templateUrl: './cash-closing.component.html',
  styleUrls: ['./cash-closing.component.scss']
})
export class CashClosingComponent implements OnInit {

  /* Vars */

  public performance: Array<any> = [
    {
      value: "1812,00",
      day: "HOJE"
    },
    {
      value: "1812,00",
      day: "ONTEM"
    },
    {
      value: "1812,00",
      day: "30/07"
    },
    {
      value: "1812,00",
      day: "29/07"
    },
    {
      value: "1812,00",
      day: "28/07"
    },
    {
      value: "1812,00",
      day: "27/07"
    },
    {
      value: "1812,00",
      day: "26/07"
    },
    {
      value: "1812,00",
      day: "25/07"
    },
  ]

  constructor(private readonly authService: AuthService) { }

  public ngOnInit(): void {
    this.authService.verify();
  }

}
