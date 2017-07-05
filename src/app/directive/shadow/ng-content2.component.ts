import { Component } from '@angular/core';
// 投影指定选择器
@Component({
	selector: 'ngcontent2',
	template: `
	<div style="border: 1px solid red; padding: 1rem;">
		<h4>Child Component with Select</h4>
		<div style="border: 1px solid orange; padding: 1rem">
			<ng-content select="header"></ng-content>
		</div>
		<div style="border: 1px solid green; padding: 1rem">
			<ng-content select="section"></ng-content>
		</div>
		<div style="border: 1px solid pink; padding: 1rem">
			<ng-content select=".class-select"></ng-content>
		</div>
		<div style="border: 1px solid purple; padding: 1rem">
			<ng-content select="footer"></ng-content>
		</div>
	</div>
	`
})
export class NgContent2Component {
}

// <ngcontent2>
//     <section>Section Content</section>
//     <div class="class-select">
//       div with .class-select
//     </div>
//     <footer>Footer Content</footer>
//     <header>Header Content</header>
// </ngcontent2>