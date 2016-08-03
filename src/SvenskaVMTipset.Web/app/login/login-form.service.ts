import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service'
import { LoginModel } from './login.model';
import { LoginResult } from './loginresult.model';

@Injectable()
export class LoginFormService {
    constructor(private _apiService: ApiService) {}

    login(loginModel: LoginModel) {
        return this._apiService.postForm<LoginResult>('token', 'email=' + loginModel.email + '&password=' + loginModel.password);
    }
}