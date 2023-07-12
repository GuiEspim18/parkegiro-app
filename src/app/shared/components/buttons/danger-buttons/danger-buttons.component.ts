import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-danger-buttons',
  templateUrl: './danger-buttons.component.html',
  styleUrls: ['./danger-buttons.component.scss']
})
export class DangerButtonsComponent implements OnInit {

  /* Vars */

  @Input() public text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
