import { Component, Input, OnInit } from '@angular/core';
import { systemColors } from 'src/app/shared/utils/mocs/system-colors/system-colors.moc';

@Component({
  selector: 'app-light-button',
  templateUrl: './light-button.component.html',
  styleUrls: ['./light-button.component.scss']
})
export class LightButtonComponent implements OnInit {

  /* Vars */

  @Input() public text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
