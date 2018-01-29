import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(private loginService: LoginService) { }
  loginClick(): void {
    this.loginService
      .doLogin("", "")
      .then((d) => {

      })
      .catch((error) => {

      });
  }
}
