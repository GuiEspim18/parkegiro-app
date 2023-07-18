import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { icons } from '../mocs/icons/icons.moc';
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class Icons {

  /** 
   * Class constructor
   */

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }


  /** 
   * Method to register svg icons on angular material svg icons
   */

  public registerIcon(): void {
    for (let item of icons) {
      this.matIconRegistry.addSvgIconLiteral(
        item.name,
        this.domSanitizer.bypassSecurityTrustHtml(item.icon)
      );
    }

  }
}
