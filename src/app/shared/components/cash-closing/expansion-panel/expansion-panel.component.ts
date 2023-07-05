import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  /* Vars */

  public panelOpenState: boolean = false;

  @Input() public value: string;
  @Input() public day: string;

  public dataSource: Array<any> = [
    {
      model: "PEGEOUT 308 - Branca",
      sign: "GBR9F90",
      entrance: "18:00",
      departure: "19:00",
      value: "R$: 15,00"
    },
    {
      model: "Nissan March - Cinza",
      sign: "ABC1D23",
      entrance: "18:00",
      departure: "19:00",
      value: "R$: 15,00"
    },
    {
      model: "Renaut Capituor - Cinza",
      sign: "ABC1D23",
      entrance: "18:00",
      departure: "19:00",
      value: "R$: 15,00"
    },
    {
      model: "BMW 320i - Cinza",
      sign: "ABC1D23",
      entrance: "18:00",
      departure: "19:00",
      value: "R$: 15,00"
    },
    {
      model: "Mitsubish L200 - Preta",
      sign: "ABC1D23",
      entrance: "18:00",
      departure: "19:00",
      value: "R$: 15,00"
    },
    {
      model: "Chevrollet Tracker - Cinza",
      sign: "ABC1D23",
      entrance: "18:00",
      departure: "19:00",
      value: "R$: 15,00"
    },
  ];

  public displayedColumns: Array<string> = ['model', 'sign', 'entrance', 'departure', 'value'];


  constructor() { }

  ngOnInit(): void {
  }


  public returnElement(value: any, element: string): any {
    return value[`${element}`]
  }

}
