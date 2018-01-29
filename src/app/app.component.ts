import { Component } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { NgZone, Renderer, ElementRef, ViewChild, ViewContainerRef } from '@angular/core'
import { SpinnerService } from './services/spinner.service';
import { SpinnerComponent } from './shared/spinner.component';
@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: `<div #spinner></div><router-outlet></router-outlet>`
})
export class AppComponent {
  @ViewChild('spinner', { read: ViewContainerRef }) container: ViewContainerRef;
  constructor(private router: Router, private ngZone: NgZone, private renderer: Renderer, private _spinner: SpinnerService) {
    router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event);
    });
  }

  private _navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this._spinner.spinnerInit(this.container);
    }
    if (event instanceof NavigationEnd) {
      this._spinner.removeBlock();
    }
    if (event instanceof NavigationCancel) {
      this._spinner.removeBlock();
    }
    if (event instanceof NavigationError) {
      this._spinner.removeBlock();
    }
  }
}
