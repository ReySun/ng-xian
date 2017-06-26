import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';
import { MailServiceService } from './service/mail-service.service';
import { NgclassComponent } from './ngclass/ngclass.component';
import { HttpComponent } from './http/http.component';

@NgModule({
	declarations: [
		AppComponent,
		OutputComponent,
		NgclassComponent,
		HttpComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule
	],
	providers: [MailServiceService],
	bootstrap: [AppComponent]
})
export class AppModule { }
