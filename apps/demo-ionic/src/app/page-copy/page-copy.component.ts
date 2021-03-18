/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NzCopyToClopboardOptions } from '@ngnz/core';

@Component({
  selector: 'ngnz-page-copy',
  templateUrl: './page-copy.component.html',
  styleUrls: ['./page-copy.component.scss']
})
export class PageCopyComponent {

  constructor(
    private _toastCtrl: ToastController
  ) {}

  longTxt = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tenetur nostrum sit magnam quam dolores beatae voluptatibus odit velit eum nisi asperiores molestiae qui tempora vero, error veniam voluptates ducimus?`;
  options: NzCopyToClopboardOptions = {
    handler: (text) => this.handler(text)
  }

  async handler(text: string) {
    console.log('text copied: ', text);
    const ionToast = await this._toastCtrl.create({
      message: 'copied',
      buttons: [{text: 'x'}],
      duration: 2000,
      position: 'bottom'
    });
    await ionToast.present();
  }
}
