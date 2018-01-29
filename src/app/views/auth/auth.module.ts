import { NgModule } from '@angular/core';

//import { P404Component } from './404.component';
//import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
//import { RegisterComponent } from './register.component';

import { AuthRoutingModule } from './auth-routing.module';

//services
import { LoginService } from '../../services/login.service';

@NgModule({
  imports: [AuthRoutingModule],
  declarations: [
    LoginComponent
  ],
  providers: [LoginService]
})
export class AuthModule { }
