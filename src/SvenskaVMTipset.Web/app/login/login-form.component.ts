import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';
import { LoginModel } from './login.model';
import { LoginFormService } from './login-form.service';

@Component({
    selector: 'login-form',
    templateUrl: './app/login/login-form.component.html'
})
export class LoginFormComponent implements OnInit {
    submit = false;
    loginModel: LoginModel;

    constructor(private _loginFormService: LoginFormService, private _router: Router) {}

    ngOnInit() {
        this.loginModel = new LoginModel('', '');
    }

    onSubmit() {
        this.submit = true;
        this._loginFormService.login(this.loginModel).subscribe(result => {
            localStorage.setItem('jwt', 'Bearer ' + result.access_token);
            this._router.navigate(['/mypage']);
        });
    }
}