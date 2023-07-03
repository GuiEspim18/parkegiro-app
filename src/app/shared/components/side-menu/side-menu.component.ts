import { Component, OnInit } from '@angular/core';
import { menuIcons } from '../../utils/mocs/menu-icons/menu-icons.moc';
import { SystemColorsService } from '../../services/system-colors.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  public icons: Array<any> = menuIcons;

  constructor(private readonly systemColorsService: SystemColorsService) { }

  ngOnInit(): void {
  }

}
