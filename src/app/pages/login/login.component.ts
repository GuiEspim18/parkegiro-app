import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  /** 
   * Class constructor
   */

  constructor(private readonly authService: AuthService) { }


  /** 
   * On init method
   */

  public ngOnInit(): void {
  }

}
