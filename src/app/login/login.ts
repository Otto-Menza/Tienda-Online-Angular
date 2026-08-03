import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginServices } from '../login';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private loginService: LoginServices){}
  login(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.login(email, password);
  }
}
