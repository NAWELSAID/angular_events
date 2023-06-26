import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
