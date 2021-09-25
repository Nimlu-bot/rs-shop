import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUT } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  showMore = false;

  constructor(private router: Router) {}

  toggleMore() {
    this.showMore = !this.showMore;
  }

  toLink() {
    this.router.navigate([ROUT.NOTFOUND]);
  }
}
