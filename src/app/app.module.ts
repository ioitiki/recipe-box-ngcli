import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCIbRuMzcaYIN_cJqSrGo0AdplJKC6wFKw",
  authDomain: "recipe-box-f6b0c.firebaseapp.com",
  databaseURL: "https://recipe-box-f6b0c.firebaseio.com",
  projectId: "recipe-box-f6b0c",
  storageBucket: "recipe-box-f6b0c.appspot.com",
  messagingSenderId: "979909186719"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
