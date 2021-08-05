import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController,public toastController: ToastController) {}
  async curtir() {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza desta ação',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.xd();
          }
        }
      ]
    });

    await alert.present();
  }

  async xd() {
    const toast = await this.toastController.create({
      message: 'Like atribuido',
      duration: 2000,
      position: 'middle',
      color: 'tertiary'
    });
    toast.present();
  }

  async nota() {
    const alert = await this.alertController.create({
      header: 'Nota',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: '1',
          value: 'value1',
          handler: () => {
            console.log('Radio 1 selected');
          },
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '2',
          value: 'value2',
          handler: () => {
            console.log('Radio 2 selected');
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: '3',
          value: 'value3',
          handler: () => {
            console.log('Radio 3 selected');
          }
        },
        {
          name: 'radio4',
          type: 'radio',
          label: '4',
          value: 'value4',
          handler: () => {
            console.log('Radio 4 selected');
          }
        },
        {
          name: 'radio5',
          type: 'radio',
          label: '5',
          value: 'value5',
          handler: () => {
            console.log('Radio 5 selected');
          }
        },

      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Votar!',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
