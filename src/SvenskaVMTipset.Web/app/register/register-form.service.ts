import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { RegisterModel } from './register.model';

@Injectable()
export class RegisterFormService {

    constructor(private _apiService: ApiService) { }

    register(registerModel: RegisterModel) {
        return this._apiService.post<string[]>('register', JSON.stringify(registerModel));
    }
}