import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  /* Vars */

  public departure: Array<any> = [];


  constructor() { }

  ngOnInit(): void {
  }


  public getOut(event: any): void {
    const currentDate: Date = new Date()
    event.departure = `${currentDate.getHours()}:${currentDate.getMinutes()}`
    this.departure.push(event)
  }

}
