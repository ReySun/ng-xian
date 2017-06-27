import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
	selector: '[secDirt]'
})
export class SecondDirective {
	@Input() secDirt: string;

	@HostBinding() get innerText() {
		return this.secDirt;
	}

}
