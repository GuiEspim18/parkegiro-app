import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  /** 
   * Global properties 
   */

  public notifications: Array<any> = [
    {
      title: "Saída do Pegeout 308",
      content: "Saída as 18:00"
    },
    {
      title: "Saída do Nissan March",
      content: "Saída as 18:00"
    },
    {
      title: "Saída do Honda Fit",
      content: "Saída as 18:00"
    },
    {
      title: "Entrada do BMW 320i",
      content: "Entrada as 8:00"
    },
    {
      title: "Saída do BMW 320i",
      content: "Saída as 18:00"
    }
  ];


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
