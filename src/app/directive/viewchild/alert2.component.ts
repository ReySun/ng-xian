import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'alert2',
	template: `
	  <div *ngIf="!hidden">
  	  <div class="backdrop" (click)="hide()"></div>
	    <div class="modal2">
	      <ng-content></ng-content>
	      <div>
  	      <button (click)="hide()">{{ ok }}</button>
	      </div>
      </div>
	  </div>
  `,
	styles: [`
    .modal2 {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      border: 1px solid #ddd;
      padding: 1rem;
    }

    .backdrop {
      position: absolute;
      background: rgba(0, 0, 0, 0.1);
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
  `]
})
export class Alert2Component {
	hidden = true;

	@Input() ok = 'OK';
	@Output() close = new EventEmitter<boolean>();

	constructor() { }

	show() {
		this.hidden = false;
	}

	hide() {
		this.hidden = true;
		this.close.emit(true);
	}
}
