import { Component } from '@angular/core';

@Component({
  selector: 'ngnz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '@ngnz';

  libs = [
    {
      title: 'Components',
      items: [
        {title: '⭐ @ngnz/rating', path: 'page-rating'}
      ]
    },
    {
      title: 'Pipes',
      items: [
        {title: '⏰ @ngnz/dayjs', path: 'page-dayjs'}
      ]
    }, 
    {
      title: 'Guards',
      items: [
        {title: '🛡 @ngnz/ionic-modal-guard', path: 'page-two'}
      ]
    },
    {
      title: 'Directives',
      items: [
        {title: '✂️ @ngnz/copy-to-clipboard', path: 'page-copy'}
      ]
    },   
  ]

}
