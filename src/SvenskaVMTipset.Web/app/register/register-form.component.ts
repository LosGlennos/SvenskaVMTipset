import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { RegisterFormService } from './register-form.service';
import { RegisterModel } from './register.model';

@Component({
    selector: 'register-form',
    templateUrl: './app/register/register-form.component.html',
    providers: [ RegisterFormService ]
})

export class RegisterFormComponent {
    registerModel: RegisterModel;

    constructor(private _registerFormService: RegisterFormService) { }

    onSubmit() {
        this._registerFormService.register(this.registerModel).subscribe(result => console.log(result));
    }
}