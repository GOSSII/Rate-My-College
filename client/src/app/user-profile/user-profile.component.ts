import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/services/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from 'src/app/models/user';
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
      console.log('dsd', kk)
    });
  }

  private getUser(User: User): void {
    this.UserListService.getUser().subscribe(data => {
      this.User = data.data;
      // let id = localStorage.getItem('user');
      // console.log('toekn', id)
    });
  }

}

