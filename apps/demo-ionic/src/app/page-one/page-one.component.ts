import { Component } from '@angular/core';

@Component({
  selector: 'ngnz-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {


  currentRate = 2.5;

  actions({type, payload}: {type?: string, payload?} = {}) {
    switch (true) {
      case type === 'onRating':
        console.log('onRating', payload);
        break;
    
      default:
        break;
    }
  }

}
