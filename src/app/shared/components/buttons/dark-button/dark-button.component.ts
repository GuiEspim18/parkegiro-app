import { Component, Input, OnInit } from '@angular/core';
import { systemColors } from 'src/app/shared/utils/mocs/system-colors/system-colors.moc';

@Component({
  selector: 'app-dark-button',
  templateUrl: './dark-button.component.html',
  styleUrls: ['./dark-button.component.scss']
})
export class DarkButtonComponent implements OnInit {

  /* Vars */

  @Input() public text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
