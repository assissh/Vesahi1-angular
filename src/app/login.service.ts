import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Login} from './login';
import 'rxjs/add/observable/throw';
//  unclear
import {_catch} from 'rxjs/operator/catch';
import 'rxjs/add/operator/catch';
import {Team} from './Team/Team';

@Injectable()
export class LoginService {
  private _url: string = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) {
  }
  getTeam(): Observable<Team[]> {
    return this.http.get<Team[]>('http://127.0.0.1:8000/development_team/')
    .catch(this.errorHandler);
  }

  postlogin(data): Observable<Login[]> {

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<Login[]>(this._url + '/login/', JSON.stringify(data), {headers: headers});

  }
  post_development_team(data): Observable<Team[]> {

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<Team[]>(this._url + '/development_team/', JSON.stringify(data), {headers: headers});

  }
    errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server Error")
  }
}
