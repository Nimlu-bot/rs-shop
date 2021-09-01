import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUT } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  showProfile = true;

  constructor(private router: Router) {}

  toCategories() {
    this.router.navigate([ROUT.CATEGORIES]);
  }

  toRoot() {
    this.router.navigate([ROUT.ROOT]);
  }

  toggleProfile() {
    this.showProfile = !this.showProfile;
  }
}
