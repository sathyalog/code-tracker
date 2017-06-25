import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
isLoggedIn:boolean = localStorage.getItem('authToken')?true:false;
  constructor() { }

  ngOnInit() {
  }

}
