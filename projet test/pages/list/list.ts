
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  rootPage: any;
  items: Array<{ title: string, score: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'ListsPage';
    this.items = [
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

  itemTapped(event, item) {
    this.navCtrl.push(item.score);
  }
  
}