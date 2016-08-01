import { Component } from '@angular/core'
import { LoginFormComponent } from './login-form.component'
import { LoginFormService } from './login-form.service'
import { LoginModel } from './login.model'

@Component({
    selector: 'login',
    templateUrl: './app/login/login.component.html',
    directives: [LoginFormComponent],
    providers: [LoginFormService]
})

export class LoginComponent {
    private loginModel: LoginModel;

    constructor(private _loginFormService: LoginFormService) { }

    getValues() {
        let values = [];
        this._loginFormService.login(this.loginModel).subscribe(result => console.log(result));
    }
}