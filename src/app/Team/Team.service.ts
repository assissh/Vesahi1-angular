import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import 'rxjs/add/observable/throw';
//  unclear
import {_catch} from 'rxjs/operator/catch';
import 'rxjs/add/operator/catch';
import {Team} from './Team';


@Injectable()
export class TeamService {
  private _url: string = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) {
  }

  // post_development_team(data): Observable<Team[]> {
  //
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  //   return this.http.post<Team[]>(this._url + '/development_team/', JSON.stringify(data), {headers: headers});
  //
  // }
}
