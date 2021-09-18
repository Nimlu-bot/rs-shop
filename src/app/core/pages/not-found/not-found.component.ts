import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUT } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  toMain() {
    this.router.navigate([ROUT.ROOT]);
  }
}
