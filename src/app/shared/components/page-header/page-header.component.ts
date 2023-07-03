import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements AfterViewInit {

  @Input() public icon: string;
  @Input() public title: string;

  constructor() { }

  ngAfterViewInit(): void {
  }

}
