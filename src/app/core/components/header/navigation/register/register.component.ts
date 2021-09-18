import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { InterfaceService } from 'src/app/core/services/interface.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  minLength = 3;

  maxNameLength = 50;

  maxAddressLength = 250;

  registerForm: FormGroup;

  constructor(
    private router: Router,
    private store: Store,
    private interfaceService: InterfaceService
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
        Validators.maxLength(this.maxAddressLength),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {}

  submit() {}

  toggleLogin() {
    this.interfaceService.toggleLogin();
  }
}
