import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[thiDirt]'
})
export class ThirdDirective {

	@Input() thiDirt: string;
	@HostBinding() get innerText() {
		return this.thiDirt;
	}
	@HostListener('click', ['$event'])
	onClick(event) {
		this.thiDirt = 'Clicked!';
	}

}
