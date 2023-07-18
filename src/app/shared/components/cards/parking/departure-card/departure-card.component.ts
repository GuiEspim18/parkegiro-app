import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-departure-card',
  templateUrl: './departure-card.component.html',
  styleUrls: ['./departure-card.component.scss']
})
export class DepartureCardComponent implements OnInit {

  /* Vars */

  @Input() public departure: any;

  @Output() public cancel: EventEmitter<any> = new EventEmitter()


  constructor() { }


  ngOnInit(): void {
  }


  public cancelDeparture(value: any): void {
    this.cancel.emit(value)
  }

}
