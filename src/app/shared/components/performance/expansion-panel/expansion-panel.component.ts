import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  /* Vars */

  public panelOpenState: boolean = false;

  @Input() public value: string;
  @Input() public day: string;


  constructor() { }

  ngOnInit(): void {
  }

}
