import { Component, TemplateRef, ViewContainerRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';

@Component({
	selector: 'viewchild1',
	template: `
  	<ng-template #tpl>Hello, Semlinker...!</ng-template>
  `,
})
export class ViewChild1Component implements OnInit {
	@ViewChild('tpl') tplRef: TemplateRef<any>;

	constructor(private vcRef: ViewContainerRef) {}
    ngOnInit(): void {
        console.log(this.tplRef);
    }
    
	ngAfterViewInit() {
		this.vcRef.createEmbeddedView(this.tplRef);
	}
    
}