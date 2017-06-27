import { Component, TemplateRef, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
	selector: 'ngtplcontext',
	template: `
  	<ng-template #stpl let-message="message">
	  	<p>{{message}}</p>
	</ng-template>

	<ng-template #atpl let-msg="message">
		<p>{{msg}}</p>
	</ng-template>

	<ng-template #otpl let-msg>
		<p>{{msg}}</p>
	</ng-template>

	<div [ngTemplateOutlet]="atpl"[ngOutletContext]="context"></div>
	
	<div [ngTemplateOutlet]="stpl"[ngOutletContext]="context"></div>
	
	<div [ngTemplateOutlet]="otpl"[ngOutletContext]="context"></div>
  	`
})
export class NgtplcontextComponent {
	context = {
		message: 'Hello ngOutletContext!',
		$implicit: 'Hello, Semlinker!'
	};
}
