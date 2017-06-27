import { Component } from '@angular/core';
// 使用 <form> 标签后，我们的 username 输入框，必须添加 name 属性
@Component({
	selector: 'secForm',
	template: `
  	<form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm.value)">
    	<input 
     		type="text" 
     		required
     		minlength="3"
     		name="username"
     		[(ngModel)]="username"
     		#userName="ngModel">
    	<hr>
    	<div *ngIf="userName.errors?.required">请您输入用户名</div>
    	<div *ngIf="userName.errors?.minlength">
      		用户名的长度必须大于 {{userName.errors?.minlength.requiredLength}}，当前的长度为
        	{{userName.errors?.minlength.actualLength}}
    	</div>
    	<button type="submit">提交</button>
		{{loginForm.value | json}}
  	</form>
  `,
	styles: [``]
})
export class SecondFormComponent {
	username = 'semlinker';
	onSubmit(value) {
		console.dir(value);
	}
}
