import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ValueService } from 'src/app/shared/services/value.service';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterCardComponent implements OnInit {

  /** 
   * Global properties
   */

  public value: number;
  public stage: number = 3;


  /** 
   * Class constructor
   */

  constructor(private readonly valueService: ValueService) { }


  /** 
   * On init method
   */

  public ngOnInit(): void {
    this.update();
  }


  /** 
   * Method to get the value from page
   */

  private update(): void {
    this.valueService.value.subscribe((element: number) => {
      setTimeout(() => this.value = element);
    })
  }


  /** 
   * Method to get the skip event
   */

  public skip(event: any): void {
    this.stage = event.stage;
    this.value = event.value;
  }

}
