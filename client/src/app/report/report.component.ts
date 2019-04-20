import { Component, OnInit } from '@angular/core';
// import { ContactListService } from 'src/app/services/contact-list.service';
import {  SurveyService } from '../services/survey.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';

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
    let status = false;
    console.log('sdds id ',contact);
    this.SurveyService.getReports(contact).subscribe(data => {
      this.contact = data.todo;
      console.log(this.contact);
      let jj =70;
      if(this.contact.users === 0){
        status = true;
      }
      //this.GenerateProgressBar(this.contact);
    });
  }

  // private GenerateProgressBar(contact: Contact): void{
  //   var current_progress = 0;
  //   var interval = setInterval(function() {
  //       current_progress += 20;
  //       $("#dynamic")
  //       .css("width", current_progress + "%")
  //       .attr("aria-valuenow", current_progress)
  //       .text(current_progress + "% Complete");
  //       if (current_progress >= contact.Q1A2)
  //           clearInterval(interval);
  //   }, 1000);
  // }

  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('BlackDotReport.pdf'); // Generated PDF   
    });  
  }  
}
