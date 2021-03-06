// Wep App - Black dot
// Description - BlackDot is to create surveys for the college and ask user to respond on in.

// Dipeshpuri Goswami - 300984229
// Sanket Vagadiya - 300991500
// Ishrat Vahora - 30098257
// Manthan Shah - 300990910

import { Component, OnInit } from '@angular/core';
// import { ContactListService } from 'src/app/services/contact-list.service';
import {  SurveyService } from '../services/survey.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

// import { Contact } from 'src/app/models/contact';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contacts: Contact[];

  constructor(
    private surveyService: SurveyService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contacts = new Array<Contact>();

    this.displayContactList();
  }


  displayContactList(): void {
    this.surveyService.getActiveSurvey().subscribe(data => {
      if(data.success) {
        this.contacts = data.SurveyList;
      } else {
        this.flashMessage.show('User must be logged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

}
