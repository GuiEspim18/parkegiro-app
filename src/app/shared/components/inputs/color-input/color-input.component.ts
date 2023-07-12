import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.scss']
})
export class ColorInputComponent implements OnInit {
  
  /* Vars */

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

  constructor() { }

  ngOnInit(): void {
    this.setupControl();
  }

  public setupControl(): void {
    this.control = new FormControl(this.value)
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
