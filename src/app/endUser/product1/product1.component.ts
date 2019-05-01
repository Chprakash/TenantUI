import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  dynamicButton: { 'btn-orange': boolean; 'btn-pink': boolean; 'btn-green': boolean; 'btn-gray': boolean };
  cardTitle: { 'card-title-green': boolean; 'card-title-orange': boolean; 'card-title-pink': boolean; 'card-title-blue': boolean };


  private orangebtn = false;
  private pinkbtn = false;
  private greenbtn = false;
  private graybtn = false;
  dynamicBtn: any;

  private orangecard = false;
  private pinkcard = false;
  private greencard = false;
  private bluecard = false;
  getcardTitle: any;

  constructor(private locstor: LocalStorageService) { }

  ngOnInit() {
    // this.locstor.store('bodyBtn', 'btn-green' );
    this.dynamicBtn = this.locstor.retrieve('bodyBtn');
    console.log('selected button color-->', this.dynamicBtn);

    switch (this.dynamicBtn) {
      case 'btn-orange': {
        this.orangebtn = true;
        console.log('inside switch', this.orangebtn);
        break;
      }
      case 'btn-pink': {
        this.pinkbtn = true;
        console.log('inside switch', this.pinkbtn);
        break;
      }
      case 'btn-green': {
        this.greenbtn = true;
        console.log('inside switch', this.greenbtn);
        break;
      }
      case 'btn-gray': {
          this.graybtn = true;
          console.log('inside switch', this.graybtn);
          break;
      }
      default: {
        console.log('Invalid choice button color');
        break;
      }
    }
// -----------------card Title------------------

    this.locstor.store('cardTitle', 'card-title-pink' );
    this.getcardTitle = this.locstor.retrieve('cardTitle');
    console.log('selected button color-->', this.getcardTitle);

    switch (this.getcardTitle) {
      case 'card-title-green': {
        this.greencard = true;
        console.log('Switch Card color', this.greencard);
        break;
      }
      case 'card-title-orange': {
        this.orangecard = true;
        console.log('Switch Card color', this.orangecard);
        break;
      }
      case 'card-title-pink': {
        this.pinkcard = true;
        console.log('Switch Card color', this.pinkcard);
        break;
      }
      case 'card-title-blue': {
          this.bluecard = true;
          console.log('Switch Card color', this.bluecard);
          break;
      }
      default: {
        console.log('Invalid choice card title color');
        break;
      }
    }
    this.makeupdate();
  }
  makeupdate() {
    this. dynamicButton = {
      'btn-orange': this.orangebtn,
      'btn-pink': this.pinkbtn,
      'btn-green': this.greenbtn,
      'btn-gray': this.graybtn
     };

    this. cardTitle = {
      'card-title-green': this.greencard,
      'card-title-orange': this.orangecard,
      'card-title-pink': this.pinkcard,
      'card-title-blue': this.bluecard
     };
  }
}
