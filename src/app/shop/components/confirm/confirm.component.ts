import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IdeliveryInfo, Iproduct } from 'src/app/core/constants/models';
import { selectOrders } from 'src/app/redux/selectors/auth.selector';
import { ROUT } from 'src/app/core/constants/constants';
import { clearCurrentOrder } from 'src/app/redux/actions/auth.actions';
import { selectCurrentOrder } from '../../../redux/selectors/auth.selector';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  orders!: IdeliveryInfo[];

  currentOrder!: Iproduct[];

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectOrders).subscribe((orders) => {
      this.orders = orders;
    });
    this.store.select(selectCurrentOrder).subscribe((currentOrder) => {
      this.currentOrder = currentOrder;
    });
  }

  toMain() {
    this.store.dispatch(clearCurrentOrder());
    this.router.navigate([ROUT.ROOT]);
  }
}
