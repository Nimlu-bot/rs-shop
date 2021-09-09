import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Iproduct } from 'src/app/core/constants/models';
import { selectFavorite } from 'src/app/redux/selectors/auth.selector';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  items!: Observable<Iproduct[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.items = this.store.select(selectFavorite);
  }
}
