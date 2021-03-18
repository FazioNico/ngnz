import { Component } from '@angular/core';

@Component({
  selector: 'ngnz-page-rating',
  templateUrl: './page-rating.component.html',
  styleUrls: ['./page-rating.component.scss']
})
export class PageRatingComponent {

  readonlyRate = 2.5;
  simpleRate = 2.5;
  customizableRate = 2.5;

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
