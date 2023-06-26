import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicService } from 'src/app/services/public.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signin = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
   ])),
  });
  constructor(private apis: PublicService , private apis2: UserService ,private fb:FormBuilder,
    private router: Router) {}

  lien = this.apis.lien;
  slide :any;
  coordinate:any;
  ngOnInit(): void {
    this.getDataslide();
    this.getDatacoordinate();


  }
  getDataslide() {

    this.apis.getDataslide().subscribe((res: any) => {
    console.log('res',res)
    this.slide = res;

    })
  }
  getDatacoordinate(){

    this.apis.getDatacoordinate().subscribe((res: any) => {
    console.log('res',res)
    this.coordinate = res;
    })
  }
  onSubmit(): void {
    let body ={...this.signin.value  };
    if(this.signin.valid){
      console.log("signin", this.signin.value  );

      this.apis2.setDatausersignin(body).subscribe(

        (res)=>{
          console.log(res)
          Swal.fire({
          icon: 'success',
          title: 'WELCOME',
          showConfirmButton: false,
/*          ,
 */
        })
        location.replace("home")      },

      (err)=>{
        console.log('err',err)
        Swal.fire({
          icon: 'error',
          title: err.error.message,
          showConfirmButton: false,
        })

      })
    }

  /* else{
    console.log(this.signin.value)

    Swal.fire({
          icon: 'error',
          title: 'vérifier vos coordonnées',
    })
  } */
}

  get email() {
    return this.signin.get('email'); }
  get password( ) {
  return this.signin.get('password'); }
}
/*  */
