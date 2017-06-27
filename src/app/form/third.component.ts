import { Component } from '@angular/core';
// valid - 表单控件有效
// invalid - 表单控件无效
// pristine - 表单控件值未改变
// dirty - 表单控件值已改变
// touched - 表单控件已被访问过
// untouched - 表单控件未被访问过
@Component({
	selector: 'thiForm',
	template: `
  	<form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm.value)">
    	<fieldset ngModelGroup="user">
			<input 
				type="text" 
				required
				minlength="3"
				name="username"
				[(ngModel)]="username"
				#userName="ngModel">
			<p>Name控件的valid状态：{{userName.valid}} - 表示控件有效</p>
			<p>Name控件的invalid状态：{{userName.invalid}} - 表示控件无效</p>
			<p>Name控件的pristine状态：{{userName.pristine}} - 表示控件值未改变</p>
			<p>Name控件的dirty状态：{{userName.dirty}} - 表示控件值已改变</p>
			<p>Name控件的touched状态：{{userName.touched}} - 表示控件已被访问过</p>
			<p>Name控件的untouched状态：{{userName.untouched}} - 表示控件未被访问过</p>

			<hr>
			<div *ngIf="userName.errors?.required">请您输入用户名</div>
			<div *ngIf="userName.errors?.minlength">
				用户名的长度必须大于 {{userName.errors?.minlength.requiredLength}}，当前的长度为
				{{userName.errors?.minlength.actualLength}}
			</div>
			<input type="password" ngModel name="password">
		</fieldset>
    	<button type="submit">提交</button>
		{{loginForm.value | json}}
  	</form>
  `,
	styles: [`
	input.ng-invalid {
       	border: 3px solid red;
    }
   	input.ng-valid {
       	border: 3px solid green;
    }
	`]
})
export class ThirdFormComponent {
	username = 'semlinker';

	onSubmit(value) {
		console.dir(value);
	}
}
