import { Component } from '@angular/core';
import { AppConst } from '../../shared/shared.constant';
@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {
  appVersion: string = AppConst.APP_VERSION;
}
