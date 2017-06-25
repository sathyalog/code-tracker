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
  environments = [
    {value: 'stream17', viewValue: 'Stream17'},
    {value: 'release17.8', viewValue: 'Release 17.8'},
    {value: 'master', viewValue: 'Master'}
  ];
  status = [
    'Approved',
    'Declined',
    'Suggestions',
    'Merged',
  ];
}
