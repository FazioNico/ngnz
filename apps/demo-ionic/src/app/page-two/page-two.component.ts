import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PageModalComponent } from '../page-modal/page-modal.component';

@Component({
  selector: 'ngnz-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent {

  constructor(
    private readonly _modalCtrl: ModalController
  ) { }

  async displayModal() {
    const ionModal = await this._modalCtrl.create({
      component: PageModalComponent
    });
    await ionModal.present();
  }

}
