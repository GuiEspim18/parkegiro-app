import { Component } from '@angular/core';
import { Icons } from './shared/utils/icons/icons';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /** 
   * Global properties
   */

  public title: string = 'parkegiro';
  public currentUrl: string;


  /** 
   * Class constructor
   */

  constructor(
    private readonly icons: Icons,
    private readonly router: Router
  ) {
    this.register();
    this.detect();
  }


  /** 
   * Method to register icons
   */

  private register(): void {
    this.icons.registerIcon();
  }


  /** 
   * Method to detect the routes
   */

  private detect(): void {
    this.router.events.subscribe((element: any) => {
      if (element instanceof NavigationEnd) this.currentUrl = element.url;
    });
  }
  

}
