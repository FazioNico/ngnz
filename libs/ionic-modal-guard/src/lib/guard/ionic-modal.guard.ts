import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Injectable()
export class IonicModalGuard implements CanActivate {
  
  constructor(
    private readonly _modalCtrl: ModalController){
  }

  async canActivate(): Promise<boolean> {
    // use Ionic ModalController to check if an existing Moadl if curently displayed
    // and close modal inplace of navigate back
    const modal = await this._modalCtrl.getTop();
    return modal 
      ? (modal.dismiss(), false)
      : true;
  }
  
}
