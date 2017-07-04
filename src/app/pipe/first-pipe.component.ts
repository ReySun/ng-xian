import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'firPipe',
	templateUrl: './first-pipe.component.html',
	styles: [``]
})
export class FirstPipeComponent implements OnInit {
	pi: number = 3.141592652412432356;
	a: number = 100;
	b: number = 100;
	myNum: number = 0.1415927;
	object: Object = {
		foo: 'bar',
		baz: 'qux',
		nested: {
			xyz: 3,
			numbers: [1, 2, 3, 4, 5]
		}
	};
	today = new Date();
	constructor() { }

	ngOnInit() {
		console.log(String.prototype.repeat);
		console.log("s".repeat(2));
	}

}
