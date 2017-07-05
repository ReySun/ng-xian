import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngModel',
    template: `
	<i>Hello, {{userName}}</i>
    <i>hello, </i><i [innerHTML]="userName"></i>

    <div>{{userName1}}<input [value]="userName1" (change)="userName1 = $event.target.value"  type="text"> </div>

    <input ngModel [ngModel]="userName1" (ngModelChange)="userName1 = $event" type="text"> 

    <input [(ngModel)]="userName1" type="text"> 
  	`
})
export class NgModelComponent implements OnInit {
    username: string = 'hello angular4!'
    userName1: string = 'hello angular4!'

    isMousedown: boolean;

    constructor() { }

    ngOnInit() {

    }

}
