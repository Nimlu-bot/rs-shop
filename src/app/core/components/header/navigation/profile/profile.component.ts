import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toggleLogin } from 'src/app/redux/actions/front.actions';
import { selectLogin } from 'src/app/redux/selectors/front.selector';
import { selectAuth } from 'src/app/redux/selectors/auth.selector';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  showLogin!: Observable<boolean>;

  isLogin!: Observable<boolean>;

  constructor(private store: Store, private authService: AuthService) {}

  ngOnInit(): void {
    this.showLogin = this.store.select(selectLogin);
    this.isLogin = this.store.select(selectAuth);
  }

  showHandler() {
    this.store.dispatch(toggleLogin());
  }

  logoutHandler() {
    this.authService.logOut();
  }
}
