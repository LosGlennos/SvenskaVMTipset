import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { LoginModel } from './login.model';
import { LoginFormService } from './login-form.service';

@Component({
    selector: 'login-form',
    templateUrl: './app/login/login-form.component.html'
})
export class LoginFormComponent implements OnInit {
    submit = false;
    loginModel: LoginModel;

    constructor(private _loginFormService: LoginFormService) {}

    ngOnInit() {
        this.loginModel = new LoginModel('', '');
    }

    onSubmit() {
        this.submit = true;
        this._loginFormService.login(this.loginModel).subscribe(result => {
            localStorage.setItem('jwt', result.access_token);
        });
    }
}