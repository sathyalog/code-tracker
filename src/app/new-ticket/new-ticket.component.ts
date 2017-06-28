import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
isLoggedIn:boolean = localStorage.getItem('authToken')?true:false;
  constructor() { }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
  ngOnInit() {
  }
  
  status = [
    'Approved',
    'Declined',
    'Suggestions',
    'Merged',
  ];
}
