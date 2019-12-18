import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';
import { LogoutComponent } from './auth/logout/logout.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ProofRegisterComponent } from './proof-register/proof-register.component';

export const routes: Routes = [
	{ path: '', component: ProofRegisterComponent, canActivate: [ AuthGuard ] },
	{ path: 'sign-in', component: SignInComponent },
	{ path: 'sign-up', component: SignUpComponent },
	{ path: 'logout', component: LogoutComponent },
	{ path: 'account', component: SignUpComponent, canActivate: [ AuthGuard ] },
	{ path: '**', redirectTo: '' }
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);
