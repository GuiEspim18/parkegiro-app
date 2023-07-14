import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit {

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
