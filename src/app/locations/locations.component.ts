import { Component, OnInit } from '@angular/core';
import data from '../data/data.json';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  newsdata:any = data;
  locations:any = this.newsdata["locations"];

  constructor() { }

  ngOnInit(): void {
  }

}
