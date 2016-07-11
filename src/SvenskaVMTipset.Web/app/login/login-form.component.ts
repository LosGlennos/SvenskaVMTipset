import { Component } from '@angular/core';
import { NgForm } from '@angular/common';

@Component({
  selector: 'login-form',
  templateUrl: './app/login/login-form.component.html'
})
export class LoginFormComponent {
  submit = false;
  
  onsubmit() {
    this.submit = true;
  }
}