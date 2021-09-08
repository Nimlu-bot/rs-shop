import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Icategory } from 'src/app/core/constants/models';
import { selectCategories } from 'src/app/redux/selectors/caregories.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  categories!: Observable<Icategory[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.categories = this.store.select(selectCategories);
  }
}
