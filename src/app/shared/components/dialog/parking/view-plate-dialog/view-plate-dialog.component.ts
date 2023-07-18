import { Component, Input, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-plate-dialog',
  templateUrl: './view-plate-dialog.component.html',
  styleUrls: ['./view-plate-dialog.component.scss']
})
export class ViewPlateDialogComponent implements OnInit {

  /** 
   * Global properties
   */

  public data: Array<any> = new Array();


  /** 
   * Class constructor
   */

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
  ) { }


  /** 
   * On init method
   */

  public ngOnInit(): void {
    this.populate();
  }


  /** 
   * Method to populate the dialog
   */

  private populate(): void {
    for (let item in this.dataDialog) {
      if (item !== "id" && item !== "departure" && item !== "stage" && item !== "price" && item !== "departureDate") {
        const obj: any = {
          name: this.nameEntrance(item),
          value: this.format(item, this.dataDialog[item])
        };
        if (this.dataDialog[item] !== null) this.data.push(obj);
      }
    }
    console.log(this.data)
  }


  /** 
   * Method to name a entrance item
   * @param item
   * @returns string
   */

  private nameEntrance(item: any): string {
    switch (item) {
      case "plate": return "Placa";
      case "brand": return "Marca";
      case "model": return "Modelo";
      case "color": return "Cor";
      case "entrance": return "Entrada";
      case "entranceDate": return "Data de entrada";
      default: return "";
    }
  }


  /** 
   * Method to formate information
   * @param item
   * @param value
   * @returns any
   */

  private format(item: string, value: any): any {
    if (item === "entranceDate") {
      const date: Date = new Date(value);
      const yyyy: any = date.getFullYear();
      let mm: any = date.getMonth() + 1;
      let dd: any = date.getDate();
      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;
      const formattedDate: string = dd + '/' + mm + '/' + yyyy;
      return formattedDate;
    }
    return value;
  }

}
