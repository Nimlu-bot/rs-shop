import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeliveryInfo, IdeliveryInfo } from 'src/app/core/constants/models';
import { selectOrders } from 'src/app/redux/selectors/auth.selector';

@Component({
  selector: 'app-wait-list',
  templateUrl: './wait-list.component.html',
  styleUrls: ['./wait-list.component.scss'],
})
export class WaitListComponent implements OnInit {
  orders!: IdeliveryInfo[];

  constructor(private store: Store) {
    this.orders = [new DeliveryInfo(), new DeliveryInfo()];
  }

  ngOnInit(): void {
    this.store.select(selectOrders).subscribe((orders) => {
      this.orders = orders;
    });
  }
}
