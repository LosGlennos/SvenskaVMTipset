import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ApiService } from './shared/api.service';
import { StartPageComponent } from './startpage/startpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyPageComponent } from './mypage/mypage.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers: [ApiService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES],
    precompile: [StartPageComponent, LoginComponent, RegisterComponent, MyPageComponent]
})
export class AppComponent { }