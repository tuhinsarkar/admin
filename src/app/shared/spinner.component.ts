import { Component } from '@angular/core';

@Component({
  selector: 'spinner',
  styles: [
    `
.spinner-overlay {
  background-color: white;
  cursor: wait;
}

.spinner-message-container {
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
  height: 0;
  text-align: center;
  z-index: 10001;
  cursor: wait;
}

.spinner-message {
  display: inline-block;
  text-align: left;
  color: #000;
  padding: 20px;
  border-radius: 0;
  font-size: 15px;
  font-weight: bold;
  filter: alpha(opacity=100);
}

.modal-backdrop.in {
    filter: alpha(opacity=50);
    opacity: .5;
}

.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #fff;
}
    `
  ],
  template:
  `<div class="in modal-backdrop spinner-overlay"></div>
     <div class="spinner-message-container" aria-live="assertive" aria-atomic="true">
        <div class="spinner-message" [ngClass]="spinnerMessageClass"><span style="
    float: left;
"><i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i></span></div>
    </div>`
})
export class SpinnerComponent {
  state = {
    message: 'Please wait...'
  };
}
