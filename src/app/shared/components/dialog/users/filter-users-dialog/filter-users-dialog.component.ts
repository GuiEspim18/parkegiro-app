import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-users-dialog',
  templateUrl: './filter-users-dialog.component.html',
  styleUrls: ['./filter-users-dialog.component.scss']
})
export class FilterUsersDialogComponent implements OnInit {

  /** 
   * Global properties
   */

  public loader: boolean = false;


  /** 
   * Class constructor
   */

  constructor() { }


  /** 
   * On init method
   */

  public ngOnInit(): void {
  }

}
