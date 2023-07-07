import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /* Vars */

  public visible: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // this.visibility()
  }


  private visibility(): void {
    const path: string = window.location.pathname;
    if (path === "/profile") {
      this.visible = false;
    } else {
      this.visible = false
    }
  }

}
