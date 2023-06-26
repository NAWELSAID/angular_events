import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apis: PublicService ) {}

  lien = this.apis.lien;
  slide :any;
  coordinate:any;
  currentDate = new Date();


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

  multi(p:any){
    console.log(p)
    return JSON.parse(p.portfile)
  }
  }
