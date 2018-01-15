import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';



import { ListPage } from '../pages/list/list';
import { EditPage } from '../pages/edit/edit';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Life Score', component: ListPage },
      { title: 'Life Score', component: EditPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
