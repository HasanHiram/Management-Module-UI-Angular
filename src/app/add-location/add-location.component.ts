import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

  currentDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
