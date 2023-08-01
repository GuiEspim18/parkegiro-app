import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddPlateDialogComponent } from '../../../dialog/parking/add-plate-dialog/add-plate-dialog.component';
import { PlateService } from 'src/app/shared/services/plate.service';
import { Alerts } from 'src/app/shared/utils/alerts/alerts';
import { SweetAlertResult } from 'sweetalert2';
import { Message } from 'src/app/shared/utils/types/alert-question/alert-question.types';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss']
})
export class EntranceComponent implements OnInit {

  /** 
   * Global properties 
   */

  @Input() public entrance: Array<any> = [];

  public dialogRef: MatDialogRef<AddPlateDialogComponent>;

  @Output() public getOut: EventEmitter<any> = new EventEmitter();


  /** 
   * Class constructor
   */

  constructor(
    private readonly matDialogService: MatDialog,
    private readonly plateService: PlateService,
    private readonly alerts: Alerts
  ) { }


  /** 
   * On init method
   */

  public ngOnInit(): void {
    this.populate();
  }



  /** 
   * Method that open the matdialog
   */

  public openDialog(): void {
    this.dialogRef = this.matDialogService.open(AddPlateDialogComponent, {
      width: '400px',
      autoFocus: false,
    });
    this.dialogRef.afterClosed().subscribe((element: any) => {
      if (typeof(element) === 'object') {
        const msg: string = "Veículo adicionado ao pátio";
        this.alerts.success(msg);
        this.populate();
      }
    })
  }


  /** 
   * Method that get the event getOut from a component
   * @param event
   */

  public getOutEvent(event: any): void {
    const index: number = this.findIndex(event);
    if (index !== -1) {
      const message: Message = {
        title: "Deseja retirar este veículo?",
        message: "Ao retirar o veículo do pátio ele saíra da lista de entradas e irá para a lista de saída!",
        confirm: "Sim",
        cancel: "Não"
      };
      this.alerts.question(message).then((result: SweetAlertResult<any>) => {
        if (result.isConfirmed) {
          const id: number = this.entrance[index].id;
          let data: any = this.entrance[index];
          const currentDate: Date = new Date();
          data.stage = 1;
          data.departure = `${currentDate.getHours()}:${Number(currentDate.getMinutes()) < 10 ? String("0" + currentDate.getMinutes()) : currentDate.getMinutes()}`;
          this.plateService.update(id, data).subscribe(() => {
            const msg: string = "Veículo retirado do pátio";
            this.populate();
            this.alerts.success(msg);
            this.getOut.emit();
          });
        }
      });
    }
  }


  /** 
   * Method to populate the entrance array
   */

  private populate(): void {
    this.plateService.findByStage(0).subscribe((element: Array<any>) => {
      this.entrance = element;
    });
  }


  /** 
   * Method to cancel an entrance
   * @param event
   */

  public cancel(event: any): void {
    const index: number = this.findIndex(event);
    if (index !== -1) {
      const id: number = this.entrance[index].id;
      const message: Message = {
        title: "Deseja cancelar esta entrada?",
        message: "Ao cancelar esta entrada você excluirá ela do pátio definitivamente!",
        confirm: "Sim",
        cancel: "Não"
      };
      this.alerts.question(message).then((result: SweetAlertResult<any>) => {
        if (result.isConfirmed) {
          this.plateService.delete(id).subscribe(() => {
            const msg: string = "Entrada cancelada";
            this.alerts.success(msg);
            this.populate();
          });
        }
      });
    }
  }


  /** 
   * Method to find an index on entrance array
   * @param plate
   * @returns number
   */

  private findIndex(plate: string): number {
    const index: number = this.entrance.findIndex((element: any) => {
      return element.plate === plate;
    });
    return index
  }

}
