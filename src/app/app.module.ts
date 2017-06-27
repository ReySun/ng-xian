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
import { FirstDirective } from './directive/first.directive';
import { SecondDirective } from './directive/second.directive';
import { ThirdDirective } from './directive/third.directive';
import { FourDirective } from './directive/four.directive';
import { FiveDirective } from './directive/five.directive';
import { NgtplComponent } from './directive/ngtpl/ngtpl.component';
import { NgtplcontextComponent } from './directive/ngtpl/ngtplcontext.component';
import { NgtploutletComponent } from './directive/ngtpl/ngtploutlet.component';

@NgModule({
	declarations: [
		AppComponent,
		OutputComponent,
		NgclassComponent,
		HttpComponent,
		FirstDirective,
		SecondDirective,
		ThirdDirective,
		FourDirective,
		FiveDirective,
		NgtplComponent,
		NgtplcontextComponent,
		NgtploutletComponent
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
