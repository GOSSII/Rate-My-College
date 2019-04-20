import { Component, OnInit } from '@angular/core';
// import { ContactListService } from 'src/app/services/contact-list.service';
import {  SurveyService } from '../services/survey.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

// import { Contact } from 'src/app/models/contact';
import { Contact } from '../models/contact';
import { surveyResponse } from '../models/surveyResponse';
@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.css']
})
export class TakeSurveyComponent implements OnInit {
  title: string;
  contact: Contact;
  surveyresponse = new surveyResponse();


  constructor( private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private SurveyService: SurveyService,
    private router: Router) { }

  ngOnInit() {
   
    this.contact = new Contact();

    this.activatedRoute.params.subscribe(params => {
     this.contact._id = params.id;
    });

    this.getContact(this.contact);

    
  }

  private getContact(contact: Contact): void {
    this.SurveyService.getContact(contact).subscribe(data => {
      this.contact = data.todo;
    });
  }
  onDetailsPageSubmit(): void {
    console.log("back -> ", this.contact);
    this.SurveyService.addContact(this.contact).subscribe(data => {
      if (data.success) {
        //this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
        this.router.navigate(['/thankyou']);
      } else {
        //this.flashMessage.show('Add Todo Failed', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/home']);
      }
    });
  }
}
