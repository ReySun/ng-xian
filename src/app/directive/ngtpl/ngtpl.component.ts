import { Component, TemplateRef, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
	selector: 'ngtpl',
	template: `
  	<ng-template #tpl>Hello, Semlinker...!</ng-template>
  `,
})
export class NgtplComponent {

	@ViewChild('tpl') tplRef: TemplateRef<any>;
	constructor(private vcRef: ViewContainerRef) {

	}
	ngAfterViewInit() {
		this.vcRef.createEmbeddedView(this.tplRef);
	}
}
