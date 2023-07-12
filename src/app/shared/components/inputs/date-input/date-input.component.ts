import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {

  /* Vars */

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


  constructor() { }


  ngOnInit(): void {
    this.setupControl();
  }


  public blur(event: any): void {
    if (this.blurEvent) {
      const emitValue: string = `{"value": "${event.target.value}", "controlName": "${this.controlName}"}`;
      this.blurInput.emit(JSON.parse(emitValue));
    }
  }

  public keyup(event: any): void {
    const emitValue: string = `{"value": "${event.target.value}", "controlName": "${this.controlName}"}`;
    this.keyUpInput.emit(JSON.parse(emitValue));
  }

  public setupControl(): void {
    if (this.controlValue) this.control.setValue(this.controlValue);
    if (this.controlValidators.length > 0) {
      this.control.setValidators(this.controlValidators);
    }
  }

  public change(event: any): void {
    if (this.changeEvent) {
      const emitValue: string = `{"value": "${event.target.value}", "controlName": "${this.controlName}"}`;
      this.changeInput.emit(JSON.parse(emitValue))
    }
  }


}
