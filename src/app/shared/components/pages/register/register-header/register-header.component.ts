import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register-header',
  templateUrl: './register-header.component.html',
  styleUrls: ['./register-header.component.scss']
})
export class RegisterHeaderComponent implements OnInit {

  /** 
   * Global properties
   */

  @Input() public icon: string = "";
  @Input() public title: string = "";


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
