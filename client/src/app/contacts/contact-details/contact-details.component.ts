// Wep App - Black dot
// Description - BlackDot is to create surveys for the college and ask user to respond on in.

// Dipeshpuri Goswami - 300984229
// Sanket Vagadiya - 300991500
// Ishrat Vahora - 30098257
// Manthan Shah - 300990910

import { Component, OnInit } from '@angular/core';
import { ContactListService } from '../../services/contact-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

import { Contact } from '../../models/contact';
 
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  title: string;
  contact: Contact;
  status = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private contactListService: ContactListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.contact = new Contact();

    this.activatedRoute.params.subscribe(params => {
     this.contact._id = params.id;
    });

  
    if (this.title === 'Edit Survey') {
      this.status = true;
      this.getContact(this.contact);
    }
  }

  private getContact(contact: Contact): void {
    this.contactListService.getContact(contact).subscribe(data => {
      this.contact = data.todo;
      // console.log("data recive -> ", this.contact);
    });
  }

  onDetailsPageSubmit(): void {

    switch (this.title) {
      case 'Add Survey':
      // console.log("this.contact", this.contact)
      let k = JSON.parse(localStorage.getItem('user'));
      // console.log("dsd",k.id);
      // const contact = ({
      //   user_id :k.id,
      //   title : this.contact.title,
      //   questions: [{
      //       question: this.contact.Q1,
      //       o1: this.contact.O1,
      //       o2: this.contact.O2,
      //       o3: this.contact.O3,
      //       o4: this.contact.O4,
      //   }],
      //   status: 1
      // });
      // console.log("this.contact AFTER ", contact);
      this.contactListService.addContact(this.contact).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/contact/contact-list']);
        } else {
          this.flashMessage.show('Add Survey Failed', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/contact/contact-list']);
        }
      });
      break;

      case 'Edit Survey':
     // console.log("Edited doc -> ", this.contact);
      this.contactListService.editContact(this.contact).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/contact/contact-list']);
        } else {
          this.flashMessage.show('Edit Survey Failed', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/contact/contact-list']);
        }
      });
      break;
    }
  }

}
