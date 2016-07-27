﻿import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StartPageComponent } from './startpage/startpage.component';

const routes: RouterConfig = [
    { path: '', component: StartPageComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];