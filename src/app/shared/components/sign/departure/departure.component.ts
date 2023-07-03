import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.scss']
})
export class DepartureComponent implements OnInit {

  /* Vars */

  @Input() public departure: Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }

}
