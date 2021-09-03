// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { toggleLogin } from 'src/app/redux/actions/front.actions';
// import { selectLogin } from 'src/app/redux/selectors/front.selector';

// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',
//   styleUrls: ['./modal.component.scss'],
// })
// export class ModalComponent implements OnInit {
//   @ViewChild('modal') modal!: ElementRef;

//   showLogin!: Observable<boolean>;

//   constructor(private store: Store) {}

//   ngOnInit(): void {
//     this.showLogin = this.store.select(selectLogin);
//   }

//   toggleShow(event: MouseEvent) {
//     console.log(this.modal);
//     if (event.target !== this.modal.nativeElement.outerHTML)
//       this.store.dispatch(toggleLogin());
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { toggleLogin } from 'src/app/redux/actions/front.actions';
import { selectLogin } from 'src/app/redux/selectors/front.selector';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  showLogin!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.showLogin = this.store.select(selectLogin);
  }

  close() {
    this.store.dispatch(toggleLogin());
  }
}
