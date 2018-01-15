import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http"
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { ListPage } from '../pages/list/list';
import { EditPage } from "../pages/edit/edit";
import { PopupPage } from '../pages/popup/popup';


import { MusicProvider } from '../providers/music/music';

@NgModule({
  declarations: [
    MyApp,
    PopupPage,
    ListPage,
    EditPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopupPage,
    ListPage,
    EditPage
  ],
  providers: [
  ]
})
export class AppModule {}
