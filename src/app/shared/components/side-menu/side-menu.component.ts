import { Component, OnInit } from '@angular/core';
import { menuIcons } from '../../utils/mocs/menu-icons/menu-icons.moc';
import { SystemColorsService } from '../../services/system-colors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  /** 
   * Global properties
   */

  public icons: Array<any> = menuIcons;


  /** 
   * Class constructor
   */

  constructor(
    private readonly systemColorsService: SystemColorsService,
    private readonly router: Router
  ) { }


  /** 
   * On init method
   */

  public ngOnInit(): void {
  }


  /** 
   * Method to navigate to a url path
   */

  public navigate(path: string): void {
    this.router.navigate([path]);
  }

}
