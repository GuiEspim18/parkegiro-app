import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../utils/types/user/user.types';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /** 
   * Global properties
   */

  public visible: boolean = true;

  public user: any;

  public backGroundImage: string;


  /** 
   * Class constructor
   */

  constructor(
    private readonly userService: UsersService,
    private readonly router: Router
  ) {
    this.detect();
  }


  /** 
   * On init method
   */

  public ngOnInit(): void {
    this.populate();
  }


  /** 
   * Methos to populate the header inf
   */

  private populate(): void {
    const user: User = JSON.parse(localStorage.getItem('user') as string);
    if (user) {
      this.user = user;
      this.backGroundImage = this.userService.getUserPhoto(user.photo.name);
    } else {
      const admin: User = JSON.parse(localStorage.getItem('admin') as string);
      this.user = admin;
    }
  }


  /** 
   * Method to detect the routes
   */

  private detect(): void {
    this.router.events.subscribe((element: any) => {
      if (element instanceof NavigationEnd) this.visible = !(element.url === "/profile");
    });
  }

}
