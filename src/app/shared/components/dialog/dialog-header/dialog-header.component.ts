import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-header',
  templateUrl: './dialog-header.component.html',
  styleUrls: ['./dialog-header.component.scss']
})
export class DialogHeaderComponent implements OnInit {

  /* Vars */

  @Input() public title: string

  constructor() { }

  ngOnInit(): void {
  }

}
