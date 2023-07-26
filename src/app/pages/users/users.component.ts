import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddUsersDialogComponent } from 'src/app/shared/components/dialog/users/add-users-dialog/add-users-dialog.component';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  /** 
   * Global properties
   */

  public dataSource: Array<any> = [];

  public displayedColumns: Array<any> = [
    {
      type: "id",
      name: "Id",
    },
    {
      type: "name",
      name: "Nome"
    },
    {
      type: "email",
      name: "Email"
    },
    // {
    //   type: "lastAcess",
    //   name: "Último acesso"
    // },
    {
      type: "actions",
      name: "Ações"
    }
  ];

  public dialogRef: MatDialogRef<AddUsersDialogComponent>;


  /** 
   * Class constructor
   */

  constructor(
    private readonly matDialogService: MatDialog,
    private readonly userService: UsersService
  ) { }


  /** 
   * On init method
   */

  ngOnInit(): void {
    this.populate();
  }



  /** 
   * Format data method
   */

  private formatData(): void {
    for (let item of this.dataSource) {
      item.actions = ['delete', 'edit'];
    }
  }


  /** 
   * Delete user method
   * @param event
   */

  public delete(event: any): void {
    // delete from array
  }


  /** 
   * Edit user method
   * @param event
   */

  public edit(event: any): void {
    // edit from array
  }


  /** 
   * Open dialog method
   */

  public openDialog(): void {
    this.dialogRef = this.matDialogService.open(AddUsersDialogComponent, {
      width: '600px',
      autoFocus: false,
    });
    this.dialogRef.afterClosed().subscribe(() => {
      this.populate();
    });
  }


  /** 
   * Populate the users list
   */

  private populate(): void {
    this.userService.getAll().subscribe((element: Array<any>) => {
      this.dataSource = element;
      this.formatData();
    })
  } 

}
