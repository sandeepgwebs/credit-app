import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-userhistory',
  templateUrl: './userhistory.page.html',
  styleUrls: ['./userhistory.page.scss'],
})
export class UserhistoryPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Transaction History',
      message: 'This is an payment message.',
      buttons: ['Exit']
    });
  await alert.present();
  }

}
