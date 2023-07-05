import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-departure-card',
  templateUrl: './departure-card.component.html',
  styleUrls: ['./departure-card.component.scss']
})
export class DepartureCardComponent implements OnInit {

  /* Vars */

  @Input() public model: string;
  @Input() public sign: string;
  @Input() public departure: string;

  @Output() public delete: EventEmitter<any> = new EventEmitter()


  constructor() { }


  ngOnInit(): void {
  }


  public deleteDeparture(value: any): void {
    this.delete.emit(value)
  }

}
