import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddUsersDialogComponent } from 'src/app/shared/components/dialog/users/add-users-dialog/add-users-dialog.component';
import { ViewUsersDialogComponent } from 'src/app/shared/components/dialog/users/view-users-dialog/view-users-dialog.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { Alerts } from 'src/app/shared/utils/alerts/alerts';
import { Message } from 'src/app/shared/utils/types/alert-question/alert-question.types';
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
  public originalDataSource: Array<any> = [];

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
      type: "lastAccess",
      name: "Último acesso"
    },
    {
      type: "actions",
      name: "Ações"
    }
  ];

  public userDialogRef: MatDialogRef<AddUsersDialogComponent>;
  public viewUserDialogref: MatDialogRef<ViewUsersDialogComponent>;
  private filteredBefore: string = "";


  /** 
   * Class constructor
   */

  constructor(
    private readonly matDialogService: MatDialog,
    private readonly userService: UsersService,
    private readonly alerts: Alerts,
    private readonly authService: AuthService
  ) { }


  /** 
   * On init method
   */

  ngOnInit(): void {
    this.populate();
    this.authService.verify();
  }



  /** 
   * Format data method
   */

  private formatData(): void {
    for (let item of this.dataSource) {
      item.actions = ['eye', 'delete'];
    }
  }


  /** 
   * Delete user method
   * @param event
   */

  public delete(event: any): void {
    const message: Message = {
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

  public openDialog(): void {
    this.userDialogRef = this.matDialogService.open(AddUsersDialogComponent, {
      width: '600px',
      autoFocus: false,
    });
    this.userDialogRef.afterClosed().subscribe(() => {
      this.populate();
    });
  }


  /**
   * Method to view a user registered on system
   * @param event 
   */

  public view(event: any): void {
    this.viewUserDialogref = this.matDialogService.open(ViewUsersDialogComponent, {
      width: '600px',
      autoFocus: false,
      data: event
    });
  }


  /** 
   * Populate the users list
   */

  private populate(): void {
    this.userService.getAll().subscribe((element: Array<any>) => {
      this.dataSource = element;
      this.originalDataSource = element;
      this.formatData();
    });
  }


  /** 
   * Method to search characters on users list
   * @param event
   */

  public filter(event: any): void {
    const str: string = event.value.toUpperCase();
    if (str.length > 0) {
      const search: Array<any> = this.originalDataSource.filter((element: any) => `${element.email} ${element.name} ${element.surname}`.toUpperCase().includes(str));
      if (str.length > this.filteredBefore.length) this.dataSource = search;
      else this.resetDataBefore(search);
      this.filteredBefore = str;
    } else this.dataSource = this.originalDataSource;
  }


  /** 
   * Method to reset the data to before searched
   * @param search
   */

  private resetDataBefore(search: Array<any>): void {
    this.dataSource = this.originalDataSource;
    this.dataSource = search;
  }

}
