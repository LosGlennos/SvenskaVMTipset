import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service'
import { LoginModel } from './login.model';

@Injectable()
export class LoginFormService {
    constructor(private _apiService: ApiService) {}

    login(loginModel: LoginModel) {
        return this._apiService.post('login', JSON.stringify(loginModel));
    }
}