import { Component, Inject, OnInit } from '@angular/core';
import { inputs } from './view-users.inputs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Input } from 'src/app/shared/utils/types/input/input.type';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-view-users-dialog',
  templateUrl: './view-users-dialog.component.html',
  styleUrls: ['./view-users-dialog.component.scss']
})
export class ViewUsersDialogComponent implements OnInit {

  /** 
   * Global properties
   */

  public inputs: Array<any> = inputs;

  public username: string = "";

  public backGroundImage: string = "";


  /** 
   * Class constructor
   */

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly dataDialog: any,
    private readonly userService: UsersService
  ) { }


  /** 
   * On init method
   */

  public ngOnInit(): void {
    this.populate();
  }


  /** 
   * Method to populate the form
   */

  private populate(): void {
    for (let item in this.dataDialog) {
      const index: number = this.inputs.findIndex((element: Input) => element.controlName === item);
      if (index !== -1) (this.inputs[index] as Input).value = this.dataDialog[item];
    }
    this.username = this.dataDialog.username;
    this.backGroundImage = this.userService.getUserPhoto(this.dataDialog.photo.name);
  }

}
