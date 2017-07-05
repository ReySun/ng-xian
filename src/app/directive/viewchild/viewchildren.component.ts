import { Component, QueryList, ViewChildren } from '@angular/core';
import { Alert2Component } from './alert2.component';
//为了分离关注点，我们通常希望子元素处理自己的行为并传递@Input()。 然而，它可能有助于保持结构通用。

//当模板中有多个嵌入式组件时，我们还可以使用@ViewChildren。 它收集 Alert 组件的实例列表，存储在与数组类似的QueryList 对象中。
@Component({
	selector: 'viewchildren',
	template: `
  	<alert2 ok="Next" (close)="showAlert(2)">
      	Step 1: Learn angular
    </alert2>
    <alert2 ok="Next" (close)="showAlert(3)">
      	Step 2: Love angular
    </alert2>
    <alert2 ok="Close">
      	Step 3: Build app
    </alert2>
	<button (click)="showAlert(1)">Show steps</button>
  	`,
})
export class ViewChildrenComponent {
	@ViewChildren(Alert2Component) alerts: QueryList<Alert2Component>;
	alertsArr = [];

	ngAfterViewInit() {
		this.alertsArr = this.alerts.toArray();
	}

	showAlert(step) {
		this.alertsArr[step - 1].show(); // step 1 is alert index 0
	}
}