import { Component } from '@angular/core';
//如果我们要将{{childContent}}替换为提供给ChildComponent的任何HTML，我们应该怎么办？ 一个诱人的想法是定义一个包含文本的@Input，但如果你想提供样式化的HTML或其他组件呢？ 尝试使用@Input处理这个问题可能会很快弄乱，这是内容投影的地方。组件默认情况下支持投影，您可以使用ngContent指令将投影内容放置在模板中。+因此，改变ChildComponent使用投影：
@Component({
	selector: 'ngcontent3',
	template: `
	<div style="border: 1px solid black; padding: 1rem; margin-bottom: 1rem;">
		Name: {{ name }}
		<button (click)='changeName()'>  change NAME</button>
	</div>
`
})
export class NgContent3Component {
	name = 'John Doe';
	changeName = function () {
		console.log(this.name);
		this.name = 'hello john'
	}
}

// 同级取值
// <ngcontent3 #ngcontent3></ngcontent3>
// My name is {{ ngcontent3.name }}
