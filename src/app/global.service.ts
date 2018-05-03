import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Login} from './login';
import {Observable} from 'rxjs/Observable';
import {Team} from './Team/Team';


@Injectable()
export class GlobalService {

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
  post_production_team(data): Observable<Team[]> {

      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.post<Team[]>(this._url + '/production_team/', JSON.stringify(data), {headers: headers});

    }
    get_production_team(): Observable<Team[]> {
    return this.http.get<Team[]>('http://127.0.0.1:8000/production_team/')
    .catch(this.errorHandler);
  }
  post_marketing_team(data): Observable<Team[]> {

      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.post<Team[]>(this._url + '/marketing_team/', JSON.stringify(data), {headers: headers});

    }
    get_marketing_team(): Observable<Team[]> {
      return this.http.get<Team[]>('http://127.0.0.1:8000/marketing_team/')
        .catch(this.errorHandler);
    }

    errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server Error")
  }
}



