import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'fouForm',
	template: `
  	<form #loginForm="ngForm">
    	Angular版本：
    	<div *ngFor="let version of versions;">
        	<input 
          		[attr.id]="version"
           		name="version"
           		ngModel
				#radio
           		required
           		[value]="version"
            	type="radio">
         	<label [attr.for]="version">{{version}}</label>
      	</div>
    	<hr>
		<select name="version" [ngModel]="versions[0]">
          	<option
           		*ngFor="let version of versions;"
            	[value]="version">
              	{{version}}
        	</option>
      	</select>
		<label></label>
    	{{loginForm.value | json}}
  	</form>
  	`,
	styles: [`
	select.ng-invalid + label:after {
      	content: '<-- 请选择版本!'
    }
	`]
})
export class FourFormComponent implements OnInit {
	versions = ['1.x', '2.x', '3.x'];
	ngOnInit = function(){
	}
}
