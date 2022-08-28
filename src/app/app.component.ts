import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddLocationComponent } from './add-location/add-location.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'overview';
  overview:boolean = false;
  locations:boolean = false;

  


  overviewOpen(){
    this.overview = true;
    this.locations = false;
  }

  locationsOpen(){
    this.overview = false;
    this.locations = true;
  }

  

  constructor(private dialog: MatDialog, private route: Router){
      
  }

  showAddLocation(){
      this.dialog.open(AddLocationComponent);
  }

  setHeader(){
    let path = this.route.url.split('/')[1];
    this.title = decodeURIComponent(path);
    console.log(this.title);
  }
}
