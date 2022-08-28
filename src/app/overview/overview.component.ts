import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddLocationComponent } from '../add-location/add-location.component';
import data from '../data/data.json';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  newsdata:any = data;

  administrators:any = this.newsdata["administrators"];
  locations:any = this.newsdata["locations"];
  billing:any = this.newsdata["billing"];
  cards:any = this.newsdata["cards"];
  usage:any = this.newsdata["usage"];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showAddLocation(){
    this.dialog.open(AddLocationComponent);
  }
    

}
