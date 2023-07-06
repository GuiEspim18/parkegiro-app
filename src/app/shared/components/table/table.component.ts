import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  /* Vars */

  @Input() public dataSource: Array<any> = [];
  @Input() public displayedColumns: Array<any> = [];

  @Output() public readonly delete: EventEmitter<any> = new EventEmitter()
  @Output() public readonly edit: EventEmitter<any> = new EventEmitter()

  public formatedColumns: Array<string> = [];


  constructor() { }

  ngOnInit(): void {
    this.formatColumns();
  }

  public returnElement(value: any, element: string): any {
    return value[`${element}`]
  }

  private formatColumns(): void {
    let formated: Array<string> = [];
    for (let item of this.displayedColumns) {
      formated.push(item.type);
    }
    this.formatedColumns = formated
  }

  public action(icon: string, element: any): void {
    if (icon == 'delete') this.delete.emit(element);
    if (icon == 'edit') this.edit.emit(element);
  }

}
