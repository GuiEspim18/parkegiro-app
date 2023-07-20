import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ViewPlateDialogComponent } from '../../../dialog/parking/view-plate-dialog/view-plate-dialog.component';

@Component({
  selector: 'app-entrance-card',
  templateUrl: './entrance-card.component.html',
  styleUrls: ['./entrance-card.component.scss']
})
export class EntranceCardComponent implements OnInit {

  /**
   * Global properties
   */

  @Input() public entrance: any;

  public dialogRef: MatDialogRef<ViewPlateDialogComponent>;


  @Output() private readonly getOutVehicle: EventEmitter<any> = new EventEmitter();
  @Output() private readonly cancel: EventEmitter<any> = new EventEmitter();


  /** 
   * Class constructor
   */

  constructor(
    private readonly matDialogService: MatDialog,
  ) { }


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


  /** 
   * Method to view all informations of an entrance
   * @param plate
   */

  public viewEntrance(entrance: any): void {
    this.dialogRef = this.matDialogService.open(ViewPlateDialogComponent, {
      width: '400px',
      autoFocus: false,
      data: {
        content: entrance,
        stage: 0
      }
    });
  }

}
