import { Directive, HostBinding, HostListener, Input, Attribute } from '@angular/core';

@Directive({
	selector: '[fouDirt]'
})
export class FourDirective {

	@Input() fouDirt: string;
	@HostBinding() get innerText() {
		return this.fouDirt;
	}
	@HostListener('click', ['$event'])
	onClick(event) {
		this.fouDirt = 'Clicked!';
		console.dir(event);
	}
	constructor( @Attribute('author') public author: string) {
		console.log(author);
	}

}
