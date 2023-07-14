import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddPlateDialogComponent } from '../../../dialog/parking/add-plate-dialog/add-plate-dialog.component';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss']
})
export class EntranceComponent implements OnInit {

  /* Vars */

  public entrance: Array<any> = [];

  public dialogRef: MatDialogRef<AddPlateDialogComponent>;

  @Output() public getOut: EventEmitter<any> = new EventEmitter();

  constructor(
    private readonly matDialogService: MatDialog,
  ) { }


  public ngOnInit(): void {
  }


  public openDialog(): void {
    this.dialogRef = this.matDialogService.open(AddPlateDialogComponent, {
      width: '400px',
      autoFocus: false,
    })
    this.dialogRef.afterClosed().subscribe((value: any) => {
      if (value) {
        const currentDate: Date = new Date();
        const vehicle: any = {
          model: `${value.brand} ${value.model} - ${value.color}`,
          sign: value.sign,
          entrance: `${currentDate.getHours()}:${Number(currentDate.getMinutes()) < 10 ? String("0" + currentDate.getMinutes()) : currentDate.getMinutes()}`
        }
        this.entrance.push(vehicle)
      }
    })
  }


  public getOutEvent(event: any): void {
    const index: number = this.entrance.findIndex((element: any) => {
      return element.sign === event;
    });
    if (index !== -1) {
      this.getOut.emit(this.entrance[index])
      this.entrance.splice(index, 1)
    }
  }


}
