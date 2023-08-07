import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrls: ['./validate-email.component.scss']
})
export class ValidateEmailComponent implements OnInit {

  /** 
   * Global properties
   */

  @Output() private readonly skip: EventEmitter<any> = new EventEmitter();
  private readonly value: number = 25;


  /** 
   * Class constructor
   */

  constructor() { }


  /** 
   * On init method
   */

  public ngOnInit(): void {
  }


  /** 
   * Method to go back to last stage
   */

  public back(): void {
    const value: any = {
      stage: 3, 
      value: this.value * 3.5
    };
    this.skip.emit(value);
  }

}
