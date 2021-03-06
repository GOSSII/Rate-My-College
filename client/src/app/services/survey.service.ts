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
  private authToken: any = null;

  // private endpoint = 'http://localhost:3000/api/takesurvey/';
   private endpoint = 'https://ratemycolleges.herokuapp.com/api/takesurvey/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
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

  public getReports(contact: Contact): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + 'report/' + contact,  this.httpOptions);
  }


  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
  
}
