import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { StartPageComponent } from './startpage/startpage.component';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  providers: [ HTTP_PROVIDERS ],
  directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent { }