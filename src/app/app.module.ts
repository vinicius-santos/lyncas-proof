import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { JwtInterceptor } from './security/jwt.interceptor';
import { ErrorInterceptor } from './security/error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { ROUTING } from './app.routing';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DecriptEncript } from './security/decriptencript';

@NgModule({
	declarations: [ AppComponent, SignUpComponent, SignInComponent, LogoutComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ToastrModule.forRoot({
			timeOut: 5000,
			progressBar: true,
			preventDuplicates: true,
			positionClass: 'toast-top-right'
		}),
		HttpClientModule,
		ROUTING
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
		{ provide: APP_BASE_HREF, useValue: '/' },
		{ provide: LOCALE_ID, useValue: 'pt' },
		DecriptEncript
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
