import { Component } from '@angular/core';
// required - 设置表单控件值是非空的
// email - 设置表单控件值的格式是 email
// minlength - 设置表单控件值的最小长度
// maxlength - 设置表单控件值的最大长度
// pattern - 设置表单控件的值需匹配 pattern 对应的模式
@Component({
	selector: 'firForm',
	template: `
  	<input 
	  	type="text" 
		required
		minlength=3
		[(ngModel)]="username"
		#userName="ngModel"
		(keyup)=onKeyUp(userName)>
    	{{username}}
	<div *ngIf="userName.errors?.required">请您输入用户名</div>
    <div *ngIf="userName.errors?.minlength">
      	用户名的长度必须大于 {{userName.errors?.minlength.requiredLength}}，
	  	当前的长度为 {{userName.errors?.minlength.actualLength}}
    </div>
  `,
	styles: [``]
})
export class FirstFormComponent {
	username = 'semlinker';
	// 在 Angular 中，我们可以通过 #userName="ngModel" 方式获取 ngModel 对象，
	// 然后通过 userName.valid 判断表单控件是否通过验
	onKeyUp=function(e){
		console.log(e);
	}
}
