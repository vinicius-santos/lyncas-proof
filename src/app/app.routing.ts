import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';
import { LogoutComponent } from './auth/logout/logout.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

export const routes: Routes = [
	{ path: 'sign-in', component: SignInComponent },
	{ path: 'sign-up', component: SignUpComponent },
	{ path: 'logout', component: LogoutComponent },

	{ path: '**', redirectTo: '' }
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);
