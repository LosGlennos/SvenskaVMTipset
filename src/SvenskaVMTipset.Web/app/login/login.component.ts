import { Component } from '@angular/core'
import { LoginFormComponent } from './login-form.component'
import { ApiService } from '../shared/api.service'
import { HTTP_PROVIDERS } from '@angular/http'

@Component({
  selector: 'login',
  templateUrl: './app/login/login.component.html',
  directives: [ LoginFormComponent ],
  providers: [ ApiService ]
})

export class LoginComponent {
  _values = [];
  constructor(private apiService: ApiService){}
  
  getValues() {
    this.apiService.get('values')
                   .subscribe(values => values.forEach(function(value) {
                     this._values.push(value);
                    }));
    
    console.log(this._values)
  }
}