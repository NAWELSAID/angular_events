import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-last-new',
  templateUrl: './last-new.component.html',
  styleUrls: ['./last-new.component.css']
})
export class LastNewComponent implements OnInit {

  constructor(private apis: PublicService ) {}

  lien = this.apis.lien;
  new: any=[];
  ngOnInit(): void {
    this.getDatanew()
  }
  getDatanew(){

    this.apis.getDatanew().subscribe((res: any) => {
    console.log('res',res)
    this.new = res;


    })
  }
}
