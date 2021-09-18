import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLogin } from 'src/app/redux/selectors/front.selector';
import { AuthService } from 'src/app/core/services/auth.service';
import { toggleLogin } from 'src/app/redux/actions/front.actions';
import { InterfaceService } from 'src/app/core/services/interface.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showLogin!: Observable<boolean>;

  public email = '';

  public password = '';

  constructor(
    private store: Store,
    private authService: AuthService,
    private interfaceService: InterfaceService
  ) {}

  ngOnInit(): void {
    this.showLogin = this.store.select(selectLogin);
  }

  submit(form: NgForm) {
    this.authService.logIn(form.value);
    this.store.dispatch(toggleLogin());
    // console.log(form.value);
  }

  toggleLogin() {
    this.interfaceService.toggleLogin();
  }
}
