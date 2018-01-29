import { Injectable, ApplicationRef, ViewContainerRef, Component, ComponentRef, ComponentFactoryResolver, ComponentFactory, ViewChild } from '@angular/core';
import { SpinnerComponent } from '../shared/spinner.component';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SpinnerService {
  spinnerComp: ComponentRef<any>;
  _spinnerThreshold: Subject<number> = new Subject<number>();
  _thresholdCounter: number = 0;
  _spinnerElement: ViewContainerRef;
  constructor(private _appRef: ApplicationRef, private _resolver: ComponentFactoryResolver) {
    this._spinnerThreshold.subscribe((n) => {
      if (n === 0) {
        this.stop();
      }
    });
  }

  public spinnerInit(placeholder): void {
    this.stop();
    this._thresholdCounter = 1;
    this._spinnerElement = placeholder;
    let elementRef = this._spinnerElement;
    return this.startInside(elementRef, null);
  }

  public start() {

  }

  public startInside(elementRef: ViewContainerRef, anchorName: string) {
    let factory = this._resolver.resolveComponentFactory(SpinnerComponent);
    this.spinnerComp = elementRef.createComponent(factory);
  }

  public stop() {
    if (this.spinnerComp) {
      this.spinnerComp.destroy();
    }
  }

  public addBlock() {
    this._thresholdCounter = this._thresholdCounter + 1;
    this._spinnerThreshold.next(this._thresholdCounter);
  }

  public removeBlock() {
    this._thresholdCounter = this._thresholdCounter - 1;
    this._spinnerThreshold.next(this._thresholdCounter);
  }
}
