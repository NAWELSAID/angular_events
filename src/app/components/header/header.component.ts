import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apis: PublicService ) {}

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
}
