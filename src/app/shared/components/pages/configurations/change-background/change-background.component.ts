import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-background',
  templateUrl: './change-background.component.html',
  styleUrls: ['./change-background.component.scss']
})
export class ChangeBackgroundComponent implements OnInit {

  public image: string = "../../../../../../assets/img/background/background.svg"


  constructor() { }

  ngOnInit(): void {
  }

}
