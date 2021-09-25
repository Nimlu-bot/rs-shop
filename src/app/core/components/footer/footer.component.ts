import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUT } from '../../constants/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private router: Router) {}

  toLink() {
    this.router.navigate([ROUT.NOTFOUND]);
  }
}
