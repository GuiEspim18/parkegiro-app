import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-color-input',
  templateUrl: './color-input.component.html',
  styles: ['@import "/src/assets/css/input.scss";']
})
export class ColorInputComponent implements OnInit {
  
  /** 
   * Global properties
   */

  @Input() public label: string;
  @Input() public type: string;
  @Input() public inputMak: string = "";
  @Input() public blurEvent: boolean = false;
  @Input() public controlValue: any;
  @Input() public controlValidators: Array<any> = [];
  @Input() public controlName: string;
  @Input() public changeEvent: boolean = false;
  @Input() public value: string = "#195A97";

  @Output() private readonly changeInput: EventEmitter<any> = new EventEmitter();


  public control: FormControl;


  /** 
   * Class constructor
   */

  constructor() { }


  /** 
   * On init method
   */

  public ngOnInit(): void {
    this.setupControl();
  }


  /** 
   * Method to setup the controls
   */

  public setupControl(): void {
    this.control = new FormControl(this.value)
    if (this.controlValue) this.control.setValue(this.controlValue);
    if (this.controlValidators.length > 0) {
      this.control.setValidators(this.controlValidators);
    }
  }


  /** 
   * Method to emit the change event
   * @param event
   */

  public change(event: any): void {
    if (this.changeEvent) {
      const emitValue: string = `{"value": "${event.target.value}", "controlName": "${this.controlName}"}`;
      this.changeInput.emit(JSON.parse(emitValue))
    }
  }

}
