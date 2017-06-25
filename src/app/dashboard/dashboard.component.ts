import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoggedIn:boolean = localStorage.getItem('authToken')?true:false;
  constructor(public afAuth: AngularFireAuth) {
    var user = firebase.auth().currentUser;
    //var user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('logged in');
      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: "+profile.providerId);
        console.log("  Provider-specific UID: "+profile.uid);
        console.log("  Name: "+profile.displayName);
        console.log("  Email: "+profile.email);
        console.log("  Photo URL: "+profile.photoURL);
      });
    } else {
      console.log('anonymous');
    }
  });
  }
  
  ngOnInit() {
  }
  
}
