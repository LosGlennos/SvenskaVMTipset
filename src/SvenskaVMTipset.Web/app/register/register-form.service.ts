import { Injectable, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { RegisterModel } from './register.model';

@Injectable()
export class RegisterFormService implements OnInit {
    private _apiService: ApiService;
    ngOnInit() {
        this._apiService = new ApiService();
    }

    constructor() { }

    register(registerModel: RegisterModel) {
        return this._apiService.post('register', JSON.stringify(registerModel));
    }

}