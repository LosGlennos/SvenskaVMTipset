import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  providers: [ HTTP_PROVIDERS ],
  directives: [ LoginComponent ]
})
export class AppComponent { }