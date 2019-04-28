import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  isHorizan: boolean;
  isVertical: boolean;
  alignment: any;
  constructor(private locstor: LocalStorageService) { }

  ngOnInit() {
    this.alignment = this.locstor.retrieve('slideralignment');

    switch (this.alignment) {
      case 'horizontal': {
        this.isHorizan = true;
        this.isVertical = false;
        console.log('Image Slider alignment horizontal', this.isHorizan);
        break;
      }
      case 'vertical': {
        this.isVertical = true;
        this.isHorizan = false;
        console.log('Image Slider alignment vertical', this.isVertical);
        break;
      }
      default: {
        console.log('Invalid choice');
        break;
      }
    }
  }
  imageclick(param) {
    alert(param);
  }
}
