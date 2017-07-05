import { Component, ViewChild } from '@angular/core';
import { Alert1Component } from './alert1.component';
// @ViewChild 和 @ViewChildren 装饰器提供对包含组件的子组件类的访问。

//@ViewChild 是一个装饰器函数，它将组件类的名称作为其输入，并在要绑定的包含组件的模板中找到其选择器。 @ViewChild也可以传递一个模板引用变量。

//例如，我们将组件类Alert绑定到其选择器<my-alert>，并将其分配给属性alert。 这使我们能够访问类方法，如show()。
@Component({
	selector: 'viewchild2',
	template: `
  	<alert1>My alert</alert1>
	<button (click)="showAlert()">Show Alert</button>
  	`,
})
export class ViewChild2Component {
	@ViewChild(Alert1Component) alert: Alert1Component;

	constructor() { }

	showAlert() {
		this.alert.show();
	}

}