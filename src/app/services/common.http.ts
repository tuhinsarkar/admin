import { Http, Headers, RequestOptions } from '@angular/http';
export class Requester {
  headers: any = new Headers({ 'Accept': 'application/json' });
}
export class SecureRequester {
  headers: any = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer' + sessionStorage.getItem("") });
}
