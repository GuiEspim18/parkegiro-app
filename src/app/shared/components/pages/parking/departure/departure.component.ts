import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlateService } from 'src/app/shared/services/plate.service';

@Component({
  selector: 'app-departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.scss']
})
export class DepartureComponent implements OnInit {

  /** 
   * Global properties 
   */

  @Input() public departure: Array<any> = []
  @Output() public readonly cancel: EventEmitter<any> = new EventEmitter();


  /** 
   * Class constructor
   */

  constructor(
    private readonly plateService: PlateService
  ) { }


  /** 
   * On init method
   */

  ngOnInit(): void {
    this.populate();
  }


  /** 
   * Method to cancel the departure
   * @param event
   */

  public cancelDeparture(event: any): void {
    const index: number = this.departure.findIndex((element: any) => {
      return element.plate === event
    });
    if (index !== -1) {
      let data: any = this.departure[index];
      const id: number = this.departure[index].id;
      data.departure = null;
      data.stage = 0;
      this.plateService.update(id, data).subscribe(() => {
        this.populate();
        this.cancel.emit();
      })
    }
  }


  /** 
   * Method to populate the departure array
   */

  public populate(): void {
    this.plateService.findByStage(1).subscribe((element: Array<any>) => {
      this.departure = element;
    });
  }

}
