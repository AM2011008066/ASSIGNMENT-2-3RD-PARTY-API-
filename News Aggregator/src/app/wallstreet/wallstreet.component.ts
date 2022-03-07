import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-wallstreet',
  templateUrl: './wallstreet.component.html',
  styleUrls: ['./wallstreet.component.css']
})
export class WallstreetComponent implements OnInit {

  constructor(private _service:NewsapiService) { }

  wallstreetDisplay:any = [];

  ngOnInit(): void {

    this._service.wallStreet().subscribe((result)=>{
      this.wallstreetDisplay = result.articles;

    });
  }

}
