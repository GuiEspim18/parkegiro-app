import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddUsersDialogComponent } from 'src/app/shared/components/dialog/users/add-users-dialog/add-users-dialog.component';
import { FilterUsersDialogComponent } from 'src/app/shared/components/dialog/users/filter-users-dialog/filter-users-dialog.component';
import { UsersService } from 'src/app/shared/services/users.service';
import { Alerts } from 'src/app/shared/utils/alerts/alerts';
import { TMessage } from 'src/app/shared/utils/types/alert-question/alert-question.types';
import { SweetAlertResult } from 'sweetalert2';

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
    {
      type: "lastAcess",
      name: "Último acesso"
    },
    {
      type: "actions",
      name: "Ações"
    }
  ];

  public dialogRef: MatDialogRef<AddUsersDialogComponent>;

  public dialogRefFilter: MatDialogRef<FilterUsersDialogComponent>;


  /** 
   * Class constructor
   */

  constructor(
    private readonly matDialogService: MatDialog,
    private readonly userService: UsersService,
    private readonly alerts: Alerts
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
      item.actions = ['delete'];
    }
  }


  /** 
   * Delete user method
   * @param event
   */

  public delete(event: any): void {
    const message: TMessage = {
      title: "Deseja deletar este usuário?",
      message: "Ao deletar este usuário você excluirá ele do sistema definitivamente!",
      confirm: "Sim",
      cancel: "Não"
    };
    this.alerts.question(message).then((result: SweetAlertResult<any>) => {
      if (result.isConfirmed) {
        this.userService.delete(event).subscribe(() => {
          this.populate();
          const message: string = "Usuário deletado com sucesso!";
          this.alerts.success(message);
        });
      }
    });
  }


  /** 
   * Open dialog method
   */

  public openDialog(stage: number): void {
    switch (stage) {
      case 0:
        this.dialogRef = this.matDialogService.open(AddUsersDialogComponent, {
          width: '600px',
          autoFocus: false,
        });
        this.dialogRef.afterClosed().subscribe(() => {
          this.populate();
        });
        break;
      case 1:
        this.dialogRefFilter = this.matDialogService.open(FilterUsersDialogComponent, {
          width: '400px',
          autoFocus: false
        });
        this.dialogRef.afterClosed().subscribe(() => {
          this.populate();
        });
        break;
    }
    
  }


  /** 
   * Populate the users list
   */

  private populate(): void {
    this.userService.getAll().subscribe((element: Array<any>) => {
      this.dataSource = element;
      console.log(element)
      this.formatData();
    });
  } 

}
