import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdCheckboxModule, MdDatepickerModule, MdInputModule, MdRadioModule, MdSelectModule, MdSlideToggleModule } from '@angular/material';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {

    apiKey: "AIzaSyC1285iSDRdLc_GLM3uj0C4rvH5Bg7llDU",
    authDomain: "code-tracker-30fb9.firebaseapp.com",
    databaseURL: "https://code-tracker-30fb9.firebaseio.com",
    projectId: "code-tracker-30fb9",
    storageBucket: "code-tracker-30fb9.appspot.com",
    messagingSenderId: "761999403716"
 
 };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule, 
    MdMenuModule, 
    MdToolbarModule, 
    MdIconModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdSlideToggleModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
