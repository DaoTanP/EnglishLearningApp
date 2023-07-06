import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent
{
  protected waiting: boolean = false;

  protected username: FormControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);
  protected password: FormControl = new FormControl(null, [Validators.required, Validators.minLength(8)]);

  public loginForm: FormGroup = new FormGroup({
    username: this.username,
    password: this.password,
  });
  constructor(private router: Router)
  {
  }

  public login (): void
  {
    this.waiting = true;

    const username = this.loginForm.value.username || '';
    const password = this.loginForm.value.password || '';

    window.alert('username: ' + username + '\npassword: ' + password);
  }
}
