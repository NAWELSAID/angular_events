import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-last-event',
  templateUrl: './last-event.component.html',
  styleUrls: ['./last-event.component.css']
})
export class LastEventComponent implements OnInit {

  constructor(private apis: EventService) { }
  lien = this.apis.lien;
  events: any=[];
  category:any=[];
  ngOnInit(): void {
    this.getDatalastevent();
    this.getDatacategoryevent()
  }


  getDatalastevent(){
    this.apis.getDatalastevent().subscribe((res: any) => {
    console.log('res',res)
    this.events = res;

    })
  }
  getDatacategoryevent(){
    this.apis.getDatacategoryevent().subscribe((res: any) => {
    console.log('res',res)
    this.category = res;

    })
  }
}
