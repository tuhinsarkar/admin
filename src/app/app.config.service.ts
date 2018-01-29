import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AppConst, SECURE_TOKEN_KEY, USER } from './shared/shared.constant';

import { environment } from '../environments/environment';

@Injectable()
export class ConfigService {

  private _config: any;

  constructor(private http: Http) { }

  load(): Promise<any> {
    return this.http.get('../assets/appconfig.txt')
      .map((response: Response) => response.text())
      .toPromise()
      .then(data => {
        let dataConfig = JSON.parse(data);
        AppConst.API_URL = environment.production ? dataConfig.prodAPIUrl : dataConfig.devAPIUrl;
        AppConst.APP_VERSION = dataConfig.appVersion;
        AppConst.PAGE_SIZE = dataConfig.pageSize;
      });
  }

  get config(): any {
    return this._config;
  }
}
