import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})

export class TopheadingComponent implements OnInit {

  constructor(private _service:NewsapiService) { }

  //display date
  topheadingDisplay:any = [];


  ngOnInit(): void {

   this._service.topHeading().subscribe((result)=>{
     console.log(result);
     this.topheadingDisplay = result.articles;
   })


  }

}
