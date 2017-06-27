import { Directive, HostBinding } from '@angular/core';

@Directive({
	selector: '[firDirt]'
})
export class FirstDirective {
	@HostBinding() innerText = 'Hello, Everyone!'

	constructor() { }

}
