import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { toggleLogin } from 'src/app/redux/actions/front.actions';
import { selectLogin } from 'src/app/redux/selectors/front.selector';
import { InterfaceService } from 'src/app/core/services/interface.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  showModal!: Observable<boolean>;

  isLogin!: Observable<boolean>;

  constructor(
    private store: Store,
    private interfaceService: InterfaceService
  ) {}

  ngOnInit() {
    this.showModal = this.store.select(selectLogin);
    this.isLogin = this.interfaceService.isLogin$;
  }

  close() {
    this.store.dispatch(toggleLogin());
  }
}
