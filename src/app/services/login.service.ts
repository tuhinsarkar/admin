import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Requester, SecureRequester } from './common.http';
import { AppConst } from '../shared/shared.constant';
//import { ConfigureService } from 'ng4-configure/ng4-configure';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class LoginService extends Requester {

  constructor(private http: Http) {
    super();
  }

  doLogin(userNameOrEmailAddress: string, password: string): Promise<any> {
    
    return new Promise((resolve, reject) => {
      setTimeout(_ => {
       // let p = this.configService.config;
        resolve({ accessToken: "dummy_token" });
      }, 40);
      //this.http
      //    .post(AppConst.API_URL + 'api/tokenauth/authentication', { userNameOrEmailAddress: userNameOrEmailAddress, password: password }, this.headers)
      //    .toPromise().then((successData) => {
      //        resolve(successData.json());
      //    })
      //    .catch((errorData) => {
      //        resolve(errorData.json());
      //    });
    });
  }




  //isUserLoggedIn(): boolean {
  //    return sessionStorage.getItem(this._sessionKey) == null ? false : true;
  //}
  //setLoginData(userData: string): void {
  //    sessionStorage.setItem(this._sessionKey, userData);
  //}
  //deactivateSession(): void {
  //    this._sessionKey = null;
  //}
}

