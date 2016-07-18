import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { LoginModel } from './login.model';
import { ApiService } from '../shared/api.service'

@Component({
    selector: 'login-form',
    templateUrl: './app/login/login-form.component.html'
})
export class LoginFormComponent implements OnInit {
    submit = false;
    loginModel;

    constructor(private _apiService: ApiService) {}

    ngOnInit() {
        this.loginModel = new LoginModel('', '');
    }

    onSubmit() {
        this.submit = true;
        this._apiService.post('login', JSON.stringify(this.loginModel))
            .subscribe(result => console.log(result));
    }
}