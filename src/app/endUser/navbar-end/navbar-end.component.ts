import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-navbar-end',
  templateUrl: './navbar-end.component.html',
  styleUrls: ['./navbar-end.component.css']
})
export class NavbarEndComponent implements OnInit {
  fontStyle: any;
  isLogo: boolean;
  isName: boolean;
  myLogo: any;
  imageUpload: boolean;
  companyName: any;
  checkPublish: any;

  constructor(private locStor: LocalStorageService, private sessstor: SessionStorageService) { }
  Headercolor: any;


  private Headercss;
  private deeppinkTheme = false;
  private dodgerblueTheme = false;
  private orangeredTheme = false;
  private blackTheme = false;

private headerTextRed = false;
private headerTextWhite = false;
private headerTextBlack = false;
private headerTextGreen = false;


private headerTextSans = false;
private headerTextcursive = false;
private headerTextmono = false;


  dynamicHeader: { 'bg-light1': boolean; 'bg-light2': boolean; 'bg-light3': boolean; 'bg-light4': boolean };
  dynamicHeaderTextColor: { 'Header-red': boolean; 'Header-white': boolean; 'Header-black': boolean; 'Header-green': boolean };
  // tslint:disable-next-line:max-line-length
  dynamicHeaderFontStyle: { 'header-text-sans': boolean; 'header-text-cursive': boolean; 'header-text-monospace': boolean };


  ngOnInit() {
    this.companyName = this.locStor.retrieve('companyname');
    // --------------Header Background Color---------------
    this.checkPublish = this.locStor.retrieve('publish');

    if (this.checkPublish) {
      // alert('navbar session storage');
      this.Headercss = this.sessstor.retrieve('header_background');
      console.log('selected css-->', this.Headercss);
      this.Headercolor = this.sessstor.retrieve('header_color');
      console.log('selected css-->', this.Headercss);
      this.fontStyle = this.sessstor.retrieve('Header_font_style');
      console.log('selected css-->', this.fontStyle);
      this.myLogo = this.sessstor.retrieve('logo');
      console.log('selected LOgoo css-->', this.myLogo);
    } else {
      // alert('navbar Local storage');
      this.Headercss = this.locStor.retrieve('header_background');
      console.log('selected css-->', this.Headercss);
      this.Headercolor = this.locStor.retrieve('header_color');
      console.log('selected css-->', this.Headercss);
      this.fontStyle = this.locStor.retrieve('Header_font_style');
      console.log('selected css-->', this.fontStyle);
      this.myLogo = this.locStor.retrieve('logo');
      console.log('selected LOgoo css-->', this.myLogo);
    }

    // this.Headercss = this.locStor.retrieve('header_background');
    // console.log('selected css-->', this.Headercss);
    // this.Headercolor = this.locStor.retrieve('header_color');
    // console.log('selected css-->', this.Headercss);
    // this.fontStyle = this.locStor.retrieve('Header_font_style');
    // console.log('selected css-->', this.fontStyle);
    // this.myLogo = this.locStor.retrieve('logo');
    // console.log('selected LOgoo css-->', this.myLogo);

    switch (this.Headercss) {
      case 'pink-Header': {
        this.deeppinkTheme = true;
        console.log('inside switch', this.deeppinkTheme);
        break;
      }
      case 'blue-Header': {
        this.dodgerblueTheme = true;
        console.log('inside switch', this.dodgerblueTheme);
        break;
      }
      case 'orange-Header': {
        this.orangeredTheme = true;
        console.log('inside switch', this.orangeredTheme);
        break;
      }
      case 'black-Header': {
          this.blackTheme = true;
          console.log('inside switch', this.blackTheme);
          break;
      }
      default: {
        console.log('Invalid choice');
        break;
      }
    }
      // --------------HeaderTextColor---------------

    // this.locstor.store('Header_color','Header_red' )
   // ------------------------------------------------
    switch (this.Headercolor) {
      case 'Header-red': {
        this.headerTextRed = true;
        console.log('inside switch', this.headerTextRed);
        break;
      }
      case 'Header-white': {
        this.headerTextWhite = true;
        console.log('inside switch', this.headerTextWhite);
        break;
      }
      case 'Header-black': {
        this.headerTextBlack = true;
        console.log('inside switch', this.headerTextBlack);
        break;
      }
      case 'Header-green': {
          this.headerTextGreen = true;
          console.log('inside switch', this.headerTextGreen);
          break;
      }
      default: {
        console.log('Invalid choice');
        break;
      }
    }



     // --------------HeaderTextStyle---------------

    // this.locstor.store('Header_font-style', 'header-text-monospace');
    // ------------------------------------------------

    switch (this.fontStyle) {
      case 'header-text-sans': {
        this.headerTextSans = true;
        console.log('inside switch', this.headerTextSans);
        break;
      }
      case 'header-text-cursive': {
        this.headerTextcursive = true;
        console.log('inside switch', this.headerTextcursive);
        break;
      }
      case 'header-text-monospace': {
        this.headerTextmono = true;
        console.log('inside switch', this.headerTextmono);
        break;
      }

      default: {
        console.log('Invalid choice');
        break;
      }
    }


// ------------------------------------------------
    if ( this.myLogo === 'true' ) {
      this.isLogo = true;
      this.isName = false;
      // this.imageUpload =  true;
    } else {
      this.isLogo = false;
      this.isName = true;
    }

    this.makeupdate();
  }
  makeupdate() {
    this. dynamicHeader = {
     'bg-light1': this.deeppinkTheme,
     'bg-light2': this.dodgerblueTheme,
     'bg-light3': this.orangeredTheme,
     'bg-light4': this.blackTheme
    };
    console.log('After upadte value-->', this.dynamicHeader );

    this. dynamicHeaderTextColor = {
      'Header-red': this.headerTextRed,
      'Header-white': this.headerTextWhite,
      'Header-black': this.headerTextBlack,
      'Header-green': this.headerTextGreen
     };
    console.log('HEADET TEXT COLOR After upadte value-->', this.dynamicHeaderTextColor );

    this. dynamicHeaderFontStyle = {
      'header-text-sans': this.headerTextSans,
      'header-text-cursive': this.headerTextcursive,
      'header-text-monospace': this.headerTextmono,
     };
    console.log('HEADET TEXT COLOR After upadte value-->', this.dynamicHeaderFontStyle );
  }
}
