import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IpService } from '../../../../services/ip.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent  {
  city: Observable<string>;

  constructor(private ipService: IpService) {
    this.city = this.ipService.getSity();
  }


}
