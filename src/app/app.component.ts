import { Component } from '@angular/core';
import { MailServiceService } from "./service/mail-service.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'Hello, Angular';

	onUpdate(id, text) {
		this.mailService.update(id, text);
	}

	constructor(private mailService: MailServiceService) { }
}