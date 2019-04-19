import { Component, OnInit } from '@angular/core';
// import { ContactListService } from 'src/app/services/contact-list.service';
import {  SurveyService } from '../services/survey.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

// import { Contact } from 'src/app/models/contact';
import { Contact } from '../models/contact';
import { surveyResponse } from '../models/surveyResponse';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  contact: Contact;
  constructor(private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private SurveyService: SurveyService,
    private router: Router) { }

  ngOnInit() {
    this.contact = new Contact();
    this.activatedRoute.params.subscribe(params => {
      this.contact._id = params.id;
      console.log('sdds',this.contact);
     });

      this.getReport(this.contact._id);
  }

  private getReport(contact: Contact): void {
    console.log('sdds id ',contact);
    this.SurveyService.getReports(contact).subscribe(data => {
      this.contact = data.todo;
      console.log('sdds pass',this.contact);
    });
  }

}
