import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdChipsModule, MdSnackBarModule, MdMenuModule, MdToolbarModule, MdIconModule, MdCheckboxModule, MdDatepickerModule, MdInputModule, MdRadioModule, MdSelectModule, MdSlideToggleModule } from '@angular/material';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotesComponent } from './notes/notes.component';

export const firebaseConfig = {

    apiKey: "AIzaSyC1285iSDRdLc_GLM3uj0C4rvH5Bg7llDU",
    authDomain: "code-tracker-30fb9.firebaseapp.com",
    databaseURL: "https://code-tracker-30fb9.firebaseio.com",
    projectId: "code-tracker-30fb9",
    storageBucket: "code-tracker-30fb9.appspot.com",
    messagingSenderId: "761999403716"
 
 };

const appRoutes: Routes = [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {path: 'new', component: NewTicketComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'notes', component: NotesComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewTicketComponent,
    WelcomeComponent,
    NotesComponent
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
    MdChipsModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdSnackBarModule,
    MdSlideToggleModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    //{provide: DateAdapter, useClass: MyDateAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
