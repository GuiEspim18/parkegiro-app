import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Options } from 'src/app/shared/utils/types/options/options.types';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {

  /** 
   * Global properties
   */

  @Input() public options: Array<Options> = new Array();
  @Input() public label: string;

  @Input() public blurEvent: boolean = false;
  @Input() public controlValue: any;
  @Input() public controlValidators: Array<any> = [];
  @Input() public controlName: string;
  @Input() public changeEvent: boolean = false;
  @Input() public value: string = "";

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
   * Method to get the changes
   * @param changes
   */

  public ngOnChanges(changes: SimpleChanges): void {
    this.valueChanges(changes.value?.currentValue);
  }


  /** 
   * Method to emit change event
   * @param event
   */

  public change(event: any): void {
    const str: string = event.value;
    if (this.changeEvent) {
      this.emitValue.value = str;
      this.changeInput.emit(this.emitValue)
    }
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
   * Method to change the value of a control
   * @param change
   */

  public valueChanges(change: string): void {
    this.control.setValue(change);
  }

}
