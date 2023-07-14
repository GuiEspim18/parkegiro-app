import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-entrance-card',
  templateUrl: './entrance-card.component.html',
  styleUrls: ['./entrance-card.component.scss']
})
export class EntranceCardComponent implements OnInit {

  /* Vars */

  @Input() public model: string;
  @Input() public sign: string;
  @Input() public entrance: string;


  @Output() public getOutVehicle: EventEmitter<any> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }


  public getOut(value: string): void {
    this.getOutVehicle.emit(value)
  }

}
