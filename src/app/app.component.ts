import { Component } from '@angular/core';
import { Icons } from './shared/utils/icons/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parkegiro';

  constructor(private icons: Icons) {
    this.icons.registerIcon();
  }

}
