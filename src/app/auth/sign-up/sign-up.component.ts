import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
}
