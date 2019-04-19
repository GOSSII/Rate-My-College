/* 
Project: Career-Portfolio-MEAN-STACK    
Name: Dipeshpuri Goswami
Id: 300984229 
Date 29, March 2019 
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from '../models/contact';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private user: User;


   private endpoint = 'http://localhost:3000/api/takesurvey/';
  // private endpoint = 'https://career-portfolio-mean-stack.herokuapp.com/api/todo/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    })
  };

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  public getActiveSurvey(): Observable<any> {
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }
  public getContact(contact: Contact): Observable<any> {
    return this.http.get<any>(this.endpoint +  contact._id, this.httpOptions);
  }

 
  public addContact(contact: Contact): Observable<any> {
    return this.http.post<any>(this.endpoint + 'add/' + contact._id, contact, this.httpOptions);
  }

  
}
