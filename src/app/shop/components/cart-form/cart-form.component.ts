import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IMyDpOptions } from 'mydatepicker';
import { v4 as uuid } from 'uuid';
import { ROUT } from 'src/app/core/constants/constants';
import { IcartProduct } from 'src/app/core/constants/models';
import { selectCurrentOrder } from 'src/app/redux/selectors/auth.selector';
import {
  clearCurrentOrder,
  createOrder,
} from 'src/app/redux/actions/auth.actions';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss'],
})
export class CartFormComponent implements OnInit {
  minLength = 3;

  maxNameLength = 50;

  maxAddressLength = 250;

  cartForm: FormGroup;

  products!: IcartProduct[];

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  constructor(private router: Router, private store: Store) {
    this.cartForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250),
      ]),
      phone: new FormControl(
        '',
        Validators.pattern(
          '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})'
        )
      ),
      time: new FormControl(null, Validators.required),
      comment: new FormControl('', Validators.maxLength(250)),
    });
  }

  ngOnInit(): void {
    this.store.select(selectCurrentOrder).subscribe((products) => {
      this.products = products;
    });
  }

  submit() {
    this.store.dispatch(
      createOrder({
        order: {
          id: uuid(),
          name: this.cartForm.value.name,
          address: this.cartForm.value.address,
          phone: this.cartForm.value.phone,
          time: JSON.stringify(this.cartForm.value.time.jsdate),
          comment: this.cartForm.value.comment,
          complited: false,
          products: this.products,
          deliveryTime: 'завтра',
        },
      })
    );
  }
}
