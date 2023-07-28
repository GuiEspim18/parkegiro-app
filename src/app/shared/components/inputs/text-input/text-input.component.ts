import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styles: ['@import "/src/assets/css/input.scss";']
})
export class TextInputComponent implements OnInit {

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
  @Input() public value: string = "";
  @Input() public readonly: boolean = false;

  @Output() private readonly blurInput: EventEmitter<any> = new EventEmitter();
  @Output() private readonly keyUpInput: EventEmitter<any> = new EventEmitter();
  @Output() private readonly changeInput: EventEmitter<any> = new EventEmitter();


  public control: FormControl = new FormControl("");


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
   * Method to get the changes
   * @param changes
   */

  public ngOnChanges(changes: SimpleChanges): void {
    this.valueChanges(changes.value?.currentValue);
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
   * Method to emit keyuo event
   * @param event
   */

  public keyup(event: any): void {
    const emitValue: string = `{"value": "${event.target.value}", "controlName": "${this.controlName}"}`;
    this.keyUpInput.emit(JSON.parse(emitValue));
  }


  /** 
   * Method to setup control
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


  /** 
   * Method to change the value of a control
   * @param change
   */

  public valueChanges(change: string): void {
    this.control.setValue(change);
  }

}
