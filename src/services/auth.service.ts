import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DecriptEncript } from 'src/app/security/decriptencript';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import jwt from 'jsonwebtoken';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	result: any;
	private currenTokenSubject: BehaviorSubject<any>;
	public currentToken: Observable<any>;

	constructor(private http: HttpClient, private decriptEncript: DecriptEncript) {}

	public get currenTokenValue(): any {
		return this.currenTokenSubject.value;
	}

	public isAuthenticated(): boolean {
		if (!environment.production) {
			return true;
		}

		const jwtHelper = new JwtHelperService();
		if (jwtHelper.isTokenExpired(this.currenTokenSubject.value)) {
			this.cleanStorage();
			return false;
		}
		return true;
	}

	cleanStorage() {
		localStorage.removeItem('currentToken');
		localStorage.removeItem('currentUserId');
		localStorage.removeItem('userName');
		this.currenTokenSubject.next(null);
	}

	public logout() {
		if (!this.isAuthenticated()) {
			return;
		}
		this.cleanStorage();
	}

	public login(email: string, password: string) {
		return this.http
			.post<any>(`${environment.uri}/user/authenticate`, {
				email: email
			})
			.pipe(
				map(
					(user) => {
						const isLogged = this.generateToken(user, password);
						if (!isLogged) {
							throw new Error('ERE001');
						}
					},
					(error) => {
						throw new Error('ERE001');
					}
				)
			);
	}

	generateToken(user, password): boolean {
		if (user) {
			const decryptPass = this.decript(user.password);
			if (password !== decryptPass) {
				return false;
			} else {
				const id = user._id;
				user.token = jwt.sign({ id }, environment.secret, {
					expiresIn: 3600 // uma hora
				});
			}
			localStorage.setItem('currentToken', JSON.stringify(user.token));
			localStorage.setItem('currentUserId', JSON.stringify(user._id));
			localStorage.setItem('userName', JSON.stringify(user.name));
			this.currenTokenSubject.next(user.token);
			return true;
		}
	}

	encript(value) {
		return this.decriptEncript.set(environment.secret, value);
	}

	decript(value) {
		return this.decriptEncript.get(environment.secret, value);
	}
}
