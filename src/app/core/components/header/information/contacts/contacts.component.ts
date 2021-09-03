import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  showMore = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMore() {
    this.showMore = !this.showMore;
  }
}
