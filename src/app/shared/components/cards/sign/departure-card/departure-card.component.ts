import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-departure-card',
  templateUrl: './departure-card.component.html',
  styleUrls: ['./departure-card.component.scss']
})
export class DepartureCardComponent implements OnInit {

  /* Vars */

  @Input() public model: string;
  @Input() public sign: string;
  @Input() public departure: string;

  constructor() { }

  ngOnInit(): void {
  }

}
