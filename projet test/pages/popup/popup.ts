
import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';


@Component({
  templateUrl: 'template.html'
})
export class PromptPage {

  constructor(public alertCtrl: AlertController) { }

  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'New Area',
      message: "Title",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}