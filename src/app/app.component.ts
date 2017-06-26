import { Component } from '@angular/core';
import {Http } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Helios Tracker';
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth,private router: Router) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(
      (success)=> {
      localStorage.setItem('authToken','true');
      this.router.navigate(['/dashboard']);
      location.reload();
    }).catch(
    (err)=> {
        console.log(err);
    }
  )};

  logout() {
    this.afAuth.auth.signOut()
    .then(
      (success)=> {
      localStorage.removeItem('authToken');
      this.router.navigate(['/welcome']);
      location.reload();
      }).catch(
      (err)=> {
          console.log(err);
      }
  )};
  navigateToNotes(){
    this.router.navigate(['/notes']);
    location.reload();
  }

}
