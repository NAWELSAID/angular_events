import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { PublicService } from 'src/app/services/public.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signup = new FormGroup({
  name: new FormControl('',[Validators.required,Validators.minLength(4)]),
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('', Validators.compose([
    Validators.minLength(5),
    Validators.required,
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
 ])),
 confirmPassword : new FormControl('',[Validators.required]),
});

  constructor(private apis: PublicService , private apis2: UserService ) {}

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
    let body ={...this.signup.value  };
    if(this.signup.valid && body.password === body.confirmPassword){
      console.log("signup", this.signup.value  );
      this.apis2.setDatausersignup(body).subscribe(
        (res)=>{
          console.log(res)

      // this.signup.reset();

          Swal.fire({
          icon: 'success',
          title: 'Message bien envoyé',
          showConfirmButton: false,
        })
      },
      (err)=>{
        console.log('err',err)
        Swal.fire({
          icon: 'error',
          title: err.error.message,
          showConfirmButton: false,
        })
      })
    }

  else{
    console.log(this.signup.value)

    Swal.fire({
          icon: 'error',
          title: 'vérifier vos coordonnées',
    })
  }
  }

  get name() {
    return this.signup.get('name'); }
  get email() {
    return this.signup.get('email'); }
  get password( ) {
  return this.signup.get('password'); }
  get confirmPassword( ) {
    return this.signup.get('confirmPassword'); }
}
