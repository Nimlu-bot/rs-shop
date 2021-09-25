import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  pluck,
} from 'rxjs/operators';
import { ROUT } from 'src/app/core/constants/constants';
import { AuthService } from 'src/app/core/services/auth.service';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { InterfaceService } from 'src/app/core/services/interface.service';
import { toggleLogin } from 'src/app/redux/actions/front.actions';
import { fetchProducts } from 'src/app/redux/actions/goods.actions';
import { selectAuth } from 'src/app/redux/selectors/auth.selector';
import { selectLogin } from 'src/app/redux/selectors/front.selector';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements AfterViewInit, OnInit {
  showProfile = false;

  showLogin!: Observable<boolean>;

  isLogin!: Observable<boolean>;

  center = 'center';

  showChild!: Observable<boolean>;

  @ViewChild('search') search!: ElementRef;

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router,
    private categoriesService: CategoriesService,
    private interfaceService: InterfaceService
  ) {}

  ngOnInit(): void {
    this.showLogin = this.store.select(selectLogin);
    this.isLogin = this.store.select(selectAuth);
    this.showChild = this.interfaceService.isSearchOpen$;
  }

  ngAfterViewInit() {
    if (this.search)
      fromEvent(this.search.nativeElement, 'input')
        .pipe(
          debounceTime(700),
          distinctUntilChanged(),
          pluck('target', 'value'),
          filter<string>((value) => value.length > 2)
        )
        .subscribe((serchString) => {
          this.store.dispatch(fetchProducts({ serchString }));
          this.categoriesService.findCategories(serchString);
          this.interfaceService.openSearch();
        });
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
