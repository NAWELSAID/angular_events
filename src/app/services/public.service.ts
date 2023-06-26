import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http : HttpClient) { }

  server = 'http://localhost:8000/api/'
  lien= "http://localhost/eventtemplate/storage/app/public/";
    /*lien= "http://localhost/eventtemplate/app/public/storage/slides";*/
getDataslide(){
  return this.http.get(this.server+'dataslide')
}
getDatacoordinate(){
  return this.http.get(this.server+'datacoordinate')
}
getDatanew(){
  return this.http.get(this.server+'datanew')
}
setDatacontact(body:any){
  return this.http.post(this.server+'datacontact' , body)
}
}
