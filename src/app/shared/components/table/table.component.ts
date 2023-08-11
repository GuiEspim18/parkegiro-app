import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  /** 
   * Global properties
   */

  @Input() public dataSource: Array<any> = [];
  @Input() public displayedColumns: Array<any> = [];

  @Output() public readonly delete: EventEmitter<any> = new EventEmitter()
  @Output() public readonly edit: EventEmitter<any> = new EventEmitter()
  @Output() public readonly view: EventEmitter<any> = new EventEmitter()

  public formatedColumns: Array<string> = [];


  /** 
   * Class constructor
   */

  constructor() { }


  /** 
   * On init method
   */

  public ngOnInit(): void {
    this.formatColumns();
  }


  /** 
   * Method to return an element from an object inside an array
   * @param value
   * @param element
   * @returns any
   */

  public returnElement(value: any, element: string): any {
    if (value[element] === undefined || value[element] === null) return "-"
    if (Date.parse(value[element])) return this.formatDate(value[element]);
    return value[element];
  }


  /** 
   * Method to format date
   * @param value
   * @returns string
   */

  private formatDate(value: any): string {
    const date: Date = new Date(value);
    const currentDate: string = date.toLocaleDateString();
    const hours: string = `${date.getHours()}:${date.getMinutes()}`;
    const formatedDate: string = `${currentDate} ${hours}`;
    return formatedDate;
  }


  /** 
   * Method to format columns from the table
   */

  private formatColumns(): void {
    let formated: Array<string> = [];
    for (let item of this.displayedColumns) {
      formated.push(item.type);
    }
    this.formatedColumns = formated;
  }


  /** 
   * Method to set the actions of the row
   * @param icon
   * @param element
   */

  public action(icon: string, element: any): void {
    switch (icon) {
      case "delete": this.delete.emit(element.id); break;
      case "edit": this.delete.emit(element.id); break;
      case "eye": this.view.emit(element); break;
    }
  }

}
