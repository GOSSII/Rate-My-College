// Wep App - Black dot
// Description - BlackDot is to create surveys for the college and ask user to respond on in.

// Dipeshpuri Goswami - 300984229
// Sanket Vagadiya - 300991500
// Ishrat Vahora - 30098257
// Manthan Shah - 300990910

import { Component, OnInit } from '@angular/core';
// import { ContactListService } from 'src/app/services/contact-list.service';
import { ContactListService } from '../../services/contact-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

// import { Contact } from 'src/app/models/contact';
import { Contact } from '../../models/contact';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(
    private contactListService: ContactListService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contacts = new Array<Contact>();

    this.displayContactList();
  }

  private onDeleteClick(): void {
    if(!confirm('Are You Sure?')) {
      this.router.navigate(['/contact/contact-list']);
    }
  }

  displayContactList(): void {
    this.contactListService.getList().subscribe(data => {
      if(data.success) {
        this.contacts = data.SurveyList;
      } else {
        this.flashMessage.show('User must be logged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

}
