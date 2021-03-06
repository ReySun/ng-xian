
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
import { NgModelComponent } from './form/ngModel.component';

import { NgtplComponent } from './directive/ngtpl/ngtpl.component';
import { NgtplcontextComponent } from './directive/ngtpl/ngtplcontext.component';
import { NgtploutletComponent } from './directive/ngtpl/ngtploutlet.component';

import { FirstFormComponent } from './form/first.component';
import { SecondFormComponent } from './form/second.component';
import { ThirdFormComponent } from './form/third.component';
import { FourFormComponent } from './form/four.component';

import { FirstPipeComponent } from './pipe/first-pipe.component';
import { WelcomePipe } from './pipe/welcome.pipe';
import { RepeatPipe } from './pipe/repeat.pipe';
import { TrimSpacePipe } from './pipe/trim-space.pipe';

import { AnimateComponent } from './animate/animate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ViewChild1Component } from './directive/viewchild/viewchild1.component';
import { ViewChild2Component } from './directive/viewchild/viewchild2.component';
import { Alert1Component } from './directive/viewchild/alert1.component';
import { Alert2Component } from './directive/viewchild/alert2.component';
import { ViewChildrenComponent } from './directive/viewchild/viewchildren.component';

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
		NgModelComponent,
		NgtplComponent,
		NgtplcontextComponent,
		NgtploutletComponent,
		FirstFormComponent,
		SecondFormComponent,
		ThirdFormComponent,
		FourFormComponent,
		FirstPipeComponent,
		WelcomePipe,
		RepeatPipe,
		TrimSpacePipe,
		AnimateComponent,
		ViewChild1Component,
		ViewChild2Component,
		Alert1Component,
		Alert2Component,
		ViewChildrenComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule,
		BrowserAnimationsModule
	],
	providers: [MailServiceService],
	bootstrap: [AppComponent]
})
export class AppModule { }
