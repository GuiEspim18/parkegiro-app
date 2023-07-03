import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-performance-card',
  templateUrl: './home-performance-card.component.html',
  styleUrls: ['./home-performance-card.component.scss']
})
export class HomePerformanceCardComponent implements OnInit {

  /* Vars */

  @Input() public previous: string;
  @Input() public performance: string;

  constructor() { }

  ngOnInit(): void {
  }

}
