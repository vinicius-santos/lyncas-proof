import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as messageCode from 'message.code.json';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: [ './sign-up.component.scss' ]
})
export class SignUpComponent implements OnInit {
	user: User;
	passwordUser: string;
	isLogged: boolean;

	constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
		this.user = new User();
	}

	ngOnInit() {
		if (this.authService.isAuthenticated()) {
			this.isLogged = true;
		}
	}

	clean() {
		this.user = new User();
		this.passwordUser = undefined;
	}

	verifyPasswordUser(e) {
		if (this.passwordUser === undefined || this.passwordUser === '') {
			return;
		}
		if (this.passwordUser.length < 6) {
			this.toastr.warning(messageCode['WARNNING']['WRE002']['summary']);
			return;
		}
		this.user.password = this.passwordUser;
		this.user.password = this.authService.encript(this.user.password);
		this.passwordUser = this.user.password;
	}

	veryfyBeforeSave() {
		if (!this.user.name || !this.user.email || !this.user.password) {
			this.toastr.warning(messageCode['WARNNING']['WRE001']['summary']);
			return false;
		}
		return true;
	}

	async save() {
		if (!this.veryfyBeforeSave()) {
			return;
		}

		try {
			var user;
			user = await new Promise(async (resolve, reject) => {
				this.authService.signup(this.user, resolve, reject);
			});
			if (user && !this.isLogged) {
				this.router.navigate([ '/' ]);
			}
		} catch (err) {
			this.toastr.error(err);
		}
	}
}
