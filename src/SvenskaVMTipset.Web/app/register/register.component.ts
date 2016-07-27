import { Component } from '@angular/core'
import { RegisterFormComponent } from './register-form.component'

@Component({
    selector: 'register',
    templateUrl: './app/register/register.component.html',
    directives: [ RegisterFormComponent ]
})
export class RegisterComponent { }