import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  // styleUrls: ['./password-input.component.scss']
  styles: ['@import "/src/assets/css/input.scss";']
})
export class PasswordInputComponent implements OnInit {

  /** 
   * Global properties
   */

  public hide: boolean = true;

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

  private emitValue: any;

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
   * Method to emit blur event
   * @param event
   */

  public blur(event: any): void {
    const str: string = event.target.value;
    if (this.blurEvent) {
      this.emitValue.value = str
      this.blurInput.emit(this.emitValue);
    }
  }


  /** 
   * Method to emit keyup event
   * @param event
   */

  public keyup(event: any): void {
    const str: string = event.target.value;
    this.emitValue.value = str;
    this.keyUpInput.emit(this.emitValue);
  }
  

  /** 
   * Method to setup the controls
   */

  public setupControl(): void {
    if (this.controlValue) this.control.setValue(this.controlValue);
    if (this.controlValidators.length > 0) {
      this.control.setValidators(this.controlValidators);
    }
    this.emitValue = {
      value: "",
      controlName: this.controlName
    };
  }


  /** 
   * Method to emit change event
   * @param event
   */

  public change(event: any): void {
    const str: string = event.target.value;
    if (this.changeEvent) {
      this.emitValue.value = str;
      this.changeInput.emit(this.emitValue)
    }
  }

}
