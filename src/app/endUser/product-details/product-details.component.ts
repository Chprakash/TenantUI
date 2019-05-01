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
  // tslint:disable-next-line:max-line-length
  dynamicProductName: { 'product-name-green': boolean; 'product-name-orange': boolean; 'product-name-pink': boolean; 'product-name-blue': boolean };
  dynamicProductdescription: { 'ProdDescription-green': boolean; 'ProdDescription-orange': boolean; 'ProdDescription-pink': boolean;
                               'ProdDescription-blue': boolean };


  private orangeProdName = false;
  private pinkProdName = false;
  private greenProdName = false;
  private blueProdName = false;
  productName: any;

  private orangeProdDesc = false;
  private pinkProdDesc = false;
  private greenProdDesc = false;
  private blueProdDesc = false;
  productDesc: any;


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
    // --------------------Product name--------------------
    // this.locstor.store('ProdNameColor', 'product-name-orange' );
    this.productName = this.locstor.retrieve('ProdNameColor');
    console.log('selected Product name color-->', this.productName);

    switch (this.productName) {
      case 'product-name-green': {
        this.greenProdName = true;
        console.log('inside switch', this.greenProdName);
        break;
      }
      case 'product-name-orange': {
        this.orangeProdName = true;
        console.log('inside switch', this.orangeProdName);
        break;
      }
      case 'product-name-pink': {
        this.pinkProdName = true;
        console.log('inside switch', this.pinkProdName);
        break;
      }
      case 'product-name-blue': {
          this.blueProdName = true;
          console.log('inside switch', this.blueProdName);
          break;
      }
      default: {
        console.log('Invalid choice product name');
        break;
      }
    }

     // --------------------Product Description--------------------
    // this.locstor.store('ProdDescColor', 'ProdDescription-green' );
    this.productDesc = this.locstor.retrieve('ProdDescColor');
    console.log('selected Product Description color-->', this.productDesc);

    switch (this.productDesc) {
       case 'ProdDescription-green': {
         this.greenProdDesc = true;
         console.log('Product description', this.greenProdDesc);
         break;
       }
       case 'ProdDescription-orange': {
         this.orangeProdDesc = true;
         console.log('Product description', this.orangeProdDesc);
         break;
       }
       case 'ProdDescription-pink': {
         this.pinkProdDesc = true;
         console.log('Product description', this.pinkProdDesc);
         break;
       }
       case 'ProdDescription-blue': {
           this.blueProdDesc = true;
           console.log('Product description', this.blueProdDesc);
           break;
       }
       default: {
         console.log('Invalid choice product Description');
         break;
       }
     }
    this.makeupdate();
  }
  imageclick(param) {
    alert(param);
  }
  makeupdate() {
    this. dynamicProductName = {
      'product-name-green': this.greenProdName,
      'product-name-pink': this.pinkProdName,
      'product-name-blue': this.blueProdName,
      'product-name-orange': this.orangeProdName
     };
    this. dynamicProductdescription = {
      'ProdDescription-green': this.greenProdDesc,
      'ProdDescription-orange': this.orangeProdDesc,
      'ProdDescription-pink': this.pinkProdDesc,
      'ProdDescription-blue': this.blueProdDesc
     };
    }
}
