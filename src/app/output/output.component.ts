import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-output',
	template: `
	<div>
     	{{message}}
		<input #myInput 
		type="text" 
		[(ngModel)]="message"
		[ngClass]="{mousedown: isMousedown}"
		(mousedown)="isMousedown = true"
		(mouseup)="isMousedown = false"
		(mouseleave)="isMousedown = false"
		>
		<button (click)="update.emit({text: message})">更新</button>
	</div>
  	`,
	styles: [`
		:host { margin: 10px; }
		.mousedown { border: 2px solid green; }
		input:focus { font-weight: bold;}
	`]
})
export class OutputComponent implements OnInit {
	@Input() message: string;
	@Output() update = new EventEmitter<{ text: string }>();

	isMousedown: boolean;
	
	constructor() { }

	ngOnInit() {
		
	}

}
