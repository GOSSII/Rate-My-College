/* 
Project: Career-Portfolio-MEAN-STACK    
Name: Dipeshpuri Goswami
Id: 300984229 
Date 29, March 2019 
*/

import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BasePageComponent implements OnInit {

  constructor(
    route: ActivatedRoute,
    private authService: AuthService
    ) {
    super(route);
  }

  ngOnInit() {
  }
  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }
}
