import { Component, Input, OnInit } from '@angular/core';
import { systemColors } from 'src/app/shared/utils/mocs/system-colors/system-colors.moc';

@Component({
  selector: 'app-home-light-card',
  templateUrl: './home-light-card.component.html',
  styleUrls: ['./home-light-card.component.scss']
})
export class HomeLightCardComponent implements OnInit {

  /* Vars */

  @Input() public model: string;
  @Input() public sign: string;
  @Input() public entrance: string;
  @Input() public exit: string;


  constructor() { }

  ngOnInit(): void {
  }

}
