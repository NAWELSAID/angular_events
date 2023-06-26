import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PublicService } from 'src/app/services/public.service';
import Swal from 'sweetalert2';
declare var $ : any
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(4)]),
    phone: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{8}$")]),
    email: new FormControl('',[Validators.required,Validators.email]),
    message: new FormControl('',Validators.required)
   });

  constructor(private apis: PublicService,) { }
  lien = this.apis.lien;
  slide :any;
  coordinate:any;
  ngOnInit(): void {
    this.getDataslide();
    this.getDatacoordinate()
  }
  getDataslide() {

    this.apis.getDataslide().subscribe((res: any) => {
    console.log('res',res)
    this.slide = res;

    })
  }
  getDatacoordinate() {

    this.apis.getDatacoordinate().subscribe((res: any) => {
    console.log('res',res)
    this.coordinate = res;

    })
  }
onSubmit(): void {
  if(this.contact.valid){

    console.log("contact", this.contact.value);
    let body ={...this.contact.value};
    this.apis.setDatacontact(body).subscribe(()=>{
    this.contact.reset();

        Swal.fire({
        icon: 'success',
        title: 'Message bien envoyé',
        showConfirmButton: false,
      })
    })
  }
else{
  console.log(this.contact.get('name')?.errors)
 console.log(this.contact.get('phone')?.errors)
  console.log(this.contact.get('email')?.errors)
  console.log(this.contact.get('message')?.errors)
  Swal.fire({
        icon: 'error',
        title: 'vérifier vos coordonnées',
  })
}
}
get name() {
return this.contact.get('name'); }
get email() {
  return this.contact.get('email'); }
get phone() {
return this.contact.get('phone'); }
get message() {
  return this.contact.get('message'); }
}

