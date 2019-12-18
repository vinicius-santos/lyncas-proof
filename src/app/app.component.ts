import { Component } from '@angular/core';
import { User } from 'src/models/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'lyncas-proof';
	currentUser: User;

	constructor(private router: Router, private authenticationService: AuthService) {
		this.authenticationService.currentToken.subscribe((x) => (this.currentUser = x));
	}

	logout() {
		this.authenticationService.logout();
		this.router.navigate([ '/sign-in' ]);
	}
}
