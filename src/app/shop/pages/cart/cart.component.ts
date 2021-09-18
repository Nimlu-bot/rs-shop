import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IcartProduct } from 'src/app/core/constants/models';
import { selectCurrentOrder } from 'src/app/redux/selectors/auth.selector';
import { ROUT } from 'src/app/core/constants/constants';
import { Observable } from 'rxjs';
import { InterfaceService } from 'src/app/core/services/interface.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: IcartProduct[] = [];

  price!: number;

  isConfirm$!: Observable<boolean>;

  constructor(
    private store: Store,
    private router: Router,
    private interfaceService: InterfaceService
  ) {}

  ngOnInit(): void {
    this.store.select(selectCurrentOrder).subscribe((products) => {
      this.products = products;

      const rawPrice = this.products.reduce(
        (acc, b) => acc + (b.amount || 1) * b.price,
        0
      );
      this.price = Math.round(rawPrice * 100) / 100;
    });

    this.isConfirm$ = this.interfaceService.isConfirmOpen$;
  }

  toCategories() {
    this.router.navigate([ROUT.CATEGORIES]);
  }
}
