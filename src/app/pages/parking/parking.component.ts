import { Component, OnInit } from '@angular/core';
import { PlateService } from 'src/app/shared/services/plate.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit {

  /** 
   * Global properties 
   */

  public departure: Array<any> = [];
  public entrance: Array<any> = [];


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
    for (let control = 0; control <= 1; control ++) this.populate(control);
  }


  /** 
   * Method to getOut a vehicle
   */

  public getOut(): void {
    this.populate(1);
  }


  /** 
   * Method to populate the entrance or departure
   * @param stage
   */

  public populate(stage: number): void {
    this.plateService.findByStage(stage).subscribe((element: Array<any>) => {
      if (stage === 0) this.entrance = element
      if (stage === 1) this.departure = element
    });
  }


  /** 
   * Method to cancel a departing
   */

  public cancel(): void {
    this.populate(0);
  }

}
