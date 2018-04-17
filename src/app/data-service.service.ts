import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable()
export class DataService {

  private baseUrl = 'http://localhost:3000'
  constructor(
    private http: HttpClient) {
  }

  get(url, params): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/' + url, params);
  }

  post(url, body): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/' + url, body);
  }




  //
  // patch(url, body): Observable<Person> {
  //   return this.http.patch<Person>(this.baseUrl + '/' + url, body);
  // }
}
