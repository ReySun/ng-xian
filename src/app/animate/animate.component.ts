import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
	selector: 'animate',
	templateUrl: './animate.component.html',
	styleUrls: ['./animate.component.css'],
	animations: [
		trigger('signal', [
			state('void', style({
				'transform': 'translateY(-100%)'
			})),
			state('go', style({
				'background-color': 'green',
				'height': '100px'
			})),
			state('stop', style({
				'background-color': 'red',
				'height': '50px'
			})),
			transition('void => *', animate(5000, keyframes([
				style({'transform': 'scale(0)'}),
				style({'transform': 'scale(0.1)'}),
				style({'transform': 'scale(0.5)'}),
				style({'transform': 'scale(0.9)'}),
				style({'transform': 'scale(0.95)'}),
				style({'transform': 'scale(1)'})
				// style({ 'transform': 'scale(0)', 'padding': '0px' }),
				// style({ 'transform': 'scale(0.1)', 'padding': '50px' }),
				// style({ 'transform': 'scale(0.5)', 'padding': '100px' }),
				// style({ 'transform': 'scale(0.9)', 'padding': '120px' }),
				// style({ 'transform': 'scale(0.95)', 'padding': '135px' }),
				// style({ 'transform': 'scale(1)', 'padding': '140px' })
			]))),
			// transition('* => *', animate(500))
			transition('* => *', animate('.5s 1s ease-out'))//cubic-bezier(0.175, 0.885, 0.32, 1.275) 

		])
	]
})
export class AnimateComponent implements OnInit {
	signal: string;
	constructor() { }
	onGo() {
		this.signal = 'go';
		console.log(2);
	}
	onStop() {
		this.signal = 'stop';
	}

	ngOnInit() {
	}

}
