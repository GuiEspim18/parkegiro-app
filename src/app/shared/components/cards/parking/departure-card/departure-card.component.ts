import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ViewPlateDialogComponent } from '../../../dialog/parking/view-plate-dialog/view-plate-dialog.component';

@Component({
  selector: 'app-departure-card',
  templateUrl: './departure-card.component.html',
  styleUrls: ['./departure-card.component.scss']
})
export class DepartureCardComponent implements OnInit {

  /* Vars */

  @Input() public departure: any;

  @Output() public cancel: EventEmitter<any> = new EventEmitter()

  public dialogRef: MatDialogRef<ViewPlateDialogComponent>;


  constructor(
    private readonly matDialogService: MatDialog,
  ) { }


  ngOnInit(): void {
  }


  public cancelDeparture(value: any): void {
    this.cancel.emit(value)
  }


  /** 
   * Method to view all informations of an entrance
   * @param plate
   */

  public viewDeparture(departure: any): void {
    this.dialogRef = this.matDialogService.open(ViewPlateDialogComponent, {
      width: '400px',
      autoFocus: false,
      data: {
        content: departure,
        stage: 1
      }
    });
  }

}
