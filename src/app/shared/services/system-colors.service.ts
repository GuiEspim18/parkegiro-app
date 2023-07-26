import { Injectable } from '@angular/core';
import { systemColors } from '../utils/mocs/system-colors/system-colors.moc';

@Injectable({
  providedIn: 'root'
})
export class SystemColorsService {

  /** 
   * Global properties
   */

  private readonly systemColors: any = systemColors;


  /** 
   * Class constructor
   */

  constructor() { }

  /** 
   * Setting the default system color
   */

  public setColor(value: any, component: string): any {
    if (!value) {
      for (let item in this.systemColors) {
        if (item !== component) {
          return false
        } else {
          return this.systemColors[item]
        }
      }
    }
    return false
  }
}
