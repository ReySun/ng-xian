import { Component } from '@angular/core';
import { MailServiceService } from "./service/mail-service.service";

@Component({
	selector: 'app-root',
	template: `
		<h3>output</h3>
		<ul>
		<li *ngFor="let message of mailService.messages;">
			{{message.text}}
		</li>
		</ul>
		<app-output *ngFor="let message of mailService.messages;"
		[message]="message.text"
		(update)="onUpdate(message.id, $event.text)">
		</app-output>

		<h3>ngclass ngstyle</h3>
		<app-ngclass></app-ngclass>

		<h3>http</h3>
		<app-http></app-http>
  	`
})
export class AppComponent {
	title = 'Hello, Angular';

	onUpdate(id, text) {
		this.mailService.update(id, text);
	}

	constructor(private mailService: MailServiceService) { }
}