import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../app/services/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../app/models/user';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  title: string;
  User: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private UserListService: UserListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.User = new User();
    this.getUser(this.User);
    this.activatedRoute.params.subscribe(params => {
      let kk = params.id;
    });
  }

  private getUser(User: User): void {
    this.UserListService.getUser().subscribe(data => {
      this.User = data.data;
      // let id = localStorage.getItem('user');
      // console.log('toekn', id)
    });
  }

  onDetailsPageSubmit(): void {
    console.log("data", this.User);
    this.UserListService.editContact(this.User).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
        this.router.navigate(['/UserProfile']);
      } else {
        this.flashMessage.show('Edit Todo Failed', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/admin']);
      }
    });
  }


}

