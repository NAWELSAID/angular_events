import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http : HttpClient) { }

  server = 'http://localhost:8000/api/'
  lien= "http://localhost/eventtemplate/storage/app/public/";


getDatalastevent(){
  return this.http.get(this.server+'datalastevent')
}
getDatacategoryevent(){
  return this.http.get(this.server+'datalastevent')
}
}
