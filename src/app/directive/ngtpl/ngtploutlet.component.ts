import { Component } from '@angular/core';

@Component({
  selector: 'ngtploutlet',
  template: `
  <ng-template #stpl>Hello, Semlinker!</ng-template>
  
  <ng-template #atpl>Hello, Angular!</ng-template>
  
  <div [ngTemplateOutlet]="atpl"></div>

  <div [ngTemplateOutlet]="stpl"></div>
  `
})
export class NgtploutletComponent  {

  constructor() { }

}
