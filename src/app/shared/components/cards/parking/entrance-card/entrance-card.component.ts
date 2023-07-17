import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-entrance-card',
  templateUrl: './entrance-card.component.html',
  styleUrls: ['./entrance-card.component.scss']
})
export class EntranceCardComponent implements OnInit {

  /**
   * Global properties
   */

  @Input() public model: string;
  @Input() public plate: string;
  @Input() public color: string;
  @Input() public entrance: string;


  @Output() private readonly getOutVehicle: EventEmitter<any> = new EventEmitter();
  @Output() private readonly cancel: EventEmitter<any> = new EventEmitter();


  /** 
   * Class constructor
   */

  constructor() { }


  /** 
   * On init method
   */

  ngOnInit(): void {
  }


  /** 
   * Method to get out a vehicle
   * @param value
   */

  public getOut(value: string): void {
    this.getOutVehicle.emit(value);
  }


  /** 
   * Method to cancel an entrance
   * @param plate
   */

  public cancelEntrance(plate: string): void {
    this.cancel.emit(plate);
  }

}
