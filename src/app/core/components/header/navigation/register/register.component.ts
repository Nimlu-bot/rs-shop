import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { InterfaceService } from 'src/app/core/services/interface.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { toggleLogin } from 'src/app/redux/actions/front.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  minLength = 3;

  maxNameLength = 50;

  registerForm: FormGroup;

  constructor(
    private router: Router,
    private store: Store,
    private interfaceService: InterfaceService,
    private authService: AuthService
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxNameLength),
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxNameLength),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  submit() {
    this.authService.register(this.registerForm.value).subscribe((data) => {
      if (data.token) {
        this.store.dispatch(toggleLogin());
      }
    });
  }

  toggleLogin() {
    this.interfaceService.toggleLogin();
  }
}
