import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-parking-card',
  templateUrl: './home-parking-card.component.html',
  styleUrls: ['./home-parking-card.component.scss']
})
export class HomeParkingCardComponent implements OnInit {

  /* Vars */

  @Input() public spaces: string;
  @Input() public occuped: string;
  @Input() public title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
