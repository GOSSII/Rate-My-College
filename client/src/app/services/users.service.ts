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
export class UserListService {
  private user: User;
  private authToken: any = null;

   private endpoint = 'http://localhost:3000/api/users/';
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

  public getUser(): Observable<any> {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log('toekn', this.user.id)
    this.loadToken();
    return this.http.get<any>(this.endpoint + '/' + this.user.id, this.httpOptions);
  }

  public getContact(contact: Contact): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + 'edit/' + this.user.id, this.httpOptions);
  }

  public addContact(contact: Contact): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint + 'add', contact, this.httpOptions);
  }

  public editContact(user: User): Observable<any> {
    this.loadToken();
    return this.http.put<any>(this.endpoint + 'edit/' + this.user.id,  user, this.httpOptions);
  }

  public deleteContact(contact: Contact): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + 'delete/' + contact._id, this.httpOptions);
  }

  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}
