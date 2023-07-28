import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styles: ['@import "/src/assets/css/input.scss";']
})
export class SearchInputComponent implements OnInit {

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

  @Output() private readonly blurInput: EventEmitter<any> = new EventEmitter();
  @Output() private readonly keyUpInput: EventEmitter<any> = new EventEmitter();
  @Output() private readonly changeInput: EventEmitter<any> = new EventEmitter();

  public control: FormControl = new FormControl("");

  public icon: string = "search";

  constructor() { }


  /** 
   * On init method
   */

  public ngOnInit(): void {
    this.setupControl();
  }


  /** 
   * Method to emit blur event
   * @param event
   */

  public blur(event: any): void {
    if (this.blurEvent) {
      const emitValue: string = `{"value": "${event.target.value}", "controlName": "${this.controlName}"}`;
      this.blurInput.emit(JSON.parse(emitValue));
    }
  }


  /** 
   * Method to emit keyup event
   * @param event
   */

  public keyup(event: any): void {
    const str: string = event.target.value;
    if (str.length > 0) this.icon = "reset";
    else this.icon = "search";
    const emitValue: string = `{"value": "${str}", "controlName": "${this.controlName}"}`;
    this.keyUpInput.emit(JSON.parse(emitValue));
  }


  /** 
   * Method to clear the control
   */

  public clear(): void {
    if (this.icon === "reset") {
      this.control.setValue("");
      this.icon = "search";
      const emitValue: string = `{"value": "", "controlName": "${this.controlName}"}`;
      this.keyUpInput.emit(JSON.parse(emitValue));
    }
  }


  /** 
   * Method to setup the control
   */

  public setupControl(): void {
    if (this.controlValue) this.control.setValue(this.controlValue);
    if (this.controlValidators.length > 0) {
      this.control.setValidators(this.controlValidators);
    }
  }


  /** 
   * Method to emit change event
   * @param event
   */

  public change(event: any): void {
    if (this.changeEvent) {
      const emitValue: string = `{"value": "${event.target.value}", "controlName": "${this.controlName}"}`;
      this.changeInput.emit(JSON.parse(emitValue))
    }
  }

}
