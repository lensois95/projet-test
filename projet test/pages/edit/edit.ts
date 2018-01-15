import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage {
  rootPage: any;
  scores: Array<{ title: string, score: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'EditPage';
    this.scores = [
      {
        title: {{score.name}},
        score : {{score.number}}
      },
      {
        title: {{score.name}},
        score : {{score.number}}
      },
      {
        title: {{score.name}},
        score : {{score.number}}
      }
    ];
  }
}
