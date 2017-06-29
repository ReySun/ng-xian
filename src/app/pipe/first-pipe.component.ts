import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'firPipe',
	templateUrl: './first-pipe.component.html',
	styles: [``]
})
export class FirstPipeComponent implements OnInit {
	today = new Date();
	constructor() { }

	ngOnInit() {
		console.log(String.prototype.repeat);
		console.log("s".repeat(2));
	}

}
