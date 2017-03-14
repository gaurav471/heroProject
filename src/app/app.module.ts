import { BrowserModule }		from '@angular/platform-browser';
import { NgModule }				from '@angular/core';
import { FormsModule }			from '@angular/forms';
import { HttpModule }			from '@angular/http';

import { AppComponent }			from '../component/app.component';
import { HeroFormComponent }	from '../component/hero/hero-form.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	declarations: [
		AppComponent,
		HeroFormComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }