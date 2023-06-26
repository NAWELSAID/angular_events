import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http : HttpClient) { }

  server = 'http://localhost:8000/api/'
  lien= "http://localhost/eventtemplate/storage/app/public/";


  setDatausersignup(body:any){
    return this.http.post(this.server+'datausersignup' , body)
  }
  setDatausersignin(body:any){
    return this.http.post(this.server+'datausersignin' , body)
  }
 /*  login(email:string, password:string ) {
    return this.http.post(this.server+'datausersignin' , {email, password})
} */
}
