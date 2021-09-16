import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ROUT } from 'src/app/core/constants/constants';
import { AuthService } from 'src/app/core/services/auth.service';
import { toggleLogin } from 'src/app/redux/actions/front.actions';
import { selectAuth } from 'src/app/redux/selectors/auth.selector';
import { selectLogin } from 'src/app/redux/selectors/front.selector';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  showProfile = false;

  showLogin!: Observable<boolean>;

  isLogin!: Observable<boolean>;

  center = 'center';

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showLogin = this.store.select(selectLogin);
    this.isLogin = this.store.select(selectAuth);
  }

  toCategories() {
    this.router.navigate([ROUT.CATEGORIES]);
  }

  toRoot() {
    this.router.navigate([ROUT.ROOT]);
  }

  toggleProfile() {
    this.showProfile = !this.showProfile;
  }

  showHandler() {
    this.store.dispatch(toggleLogin());
  }

  logoutHandler() {
    this.authService.logOut();
  }

  toCart() {
    this.router.navigate([ROUT.CART]);
  }

  toFavorite() {
    this.router.navigate([ROUT.FAVORITE]);
  }

  toWaitList() {
    this.router.navigate([ROUT.WAIT]);
  }
}
