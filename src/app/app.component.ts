import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLogin } from './redux/selectors/front.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shop';

  @ViewChild('modal') modal!: ElementRef;

  showLogin!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.showLogin = this.store.select(selectLogin);
  }
}
