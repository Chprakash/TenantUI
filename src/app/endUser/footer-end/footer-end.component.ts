import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-footer-end',
  templateUrl: './footer-end.component.html',
  styleUrls: ['./footer-end.component.css']
})
export class FooterEndComponent implements OnInit {
  isMap;
  footerMap;

  private deeppinkTheme = false;
  private dodgerblueTheme = false;
  private orangeredTheme = false;
  private blackTheme = false;

  fontStyle: any;
  private headerTextSans = false;
  private headerTextcursive = false;
  private headerTextmono = false;


private FooterTextRed = false;
private FooterTextWhite = false;
private FooterTextBlack = false;
private FooterTextGreen = false;


private HeadingTextRed = false;
private HeadingTextWhite = false;
private HeadingTextBlack = false;
private HeadingTextGreen = false;

  dynamicHeaderFontStyle: { 'header-text-sans': boolean; 'header-text-cursive': boolean; 'header-text-monospace': boolean };
  dynamicFooterTextColor: { 'Footer-red': boolean; 'Footer-white': boolean; 'Footer-black': boolean; 'Footer-green': boolean };
  dynamicHeadingTextColor: { 'Heading-red': boolean; 'Heading-white': boolean; 'Heading-black': boolean; 'Heading-green': boolean };

  // tslint:disable-next-line:max-line-length
  dynamicfooter: { 'footer-wrapper-deeppink': boolean; 'footer-wrapper-dodgerblue': boolean; 'footer-wrapper-orangered': boolean; 'footer-wrapper-black': boolean };
  footercss: any;
  Footercolor: any;
  Headingcolor: any;

  constructor(private locstor: LocalStorageService , private sessStor: SessionStorageService) { }

  ngOnInit() {

    this.footerMap = this.locstor.retrieve('map-status');
    this.isMap = this.footerMap;
    console.log('map Status check-->', this.isMap);

    if (this.footerMap === 'true') {
      this.isMap = true;
    } else {
      this.isMap = false;
    }



    // this.locstor.store('footerBackground', 'dodgerblue');
    this.footercss = this.locstor.retrieve('footer_background');
    console.log('selected css-->', this.footercss);

    switch (this.footercss) {
      case 'deeppink': {
        this.deeppinkTheme = true;
        console.log('inside switch', this.deeppinkTheme);
        break;
      }
      case 'dodgerblue': {
        this.dodgerblueTheme = true;
        console.log('inside switch', this.dodgerblueTheme);
        break;
      }
      case 'orangered': {
        this.orangeredTheme = true;
        console.log('inside switch', this.orangeredTheme);
        break;
      }
      case 'black': {
          this.blackTheme = true;
          console.log('inside switch', this.blackTheme);
          break;
      }
      default: {
        console.log('Invalid choice');
        break;
      }
    }



     // --------------HeaderTextStyle---------------

    // this.locstor.store('Header_font-style', 'header-text-monospace');
    this.fontStyle = this.locstor.retrieve('footer_font_style');
    console.log('selected css-->', this.fontStyle);

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

    // --------------FooterTextColor---------------

    // this.locstor.store('Footer-text-color', 'Footer-green' );
    this.Footercolor = this.locstor.retrieve('footer_text_color');
    console.log('selected css-->', this.Footercolor);

    switch (this.Footercolor) {
      case 'Footer-red': {
        this.FooterTextRed = true;
        console.log('inside switch', this.FooterTextRed);
        break;
      }
      case 'Footer-white': {
        this.FooterTextWhite = true;
        console.log('inside switch', this.FooterTextWhite);
        break;
      }
      case 'Footer-black': {
        this.FooterTextBlack = true;
        console.log('inside switch', this.FooterTextBlack);
        break;
      }
      case 'Footer-green': {
          this.FooterTextGreen = true;
          console.log('inside switch', this.FooterTextGreen);
          break;
      }
      default: {
        console.log('Invalid choice');
        break;
      }
    }


    // --------------HeadingTextColor---------------

    // this.locstor.store('Heading-text-color', 'Heading-white' );
    this.Headingcolor = this.locstor.retrieve('Heading_text_color');
    console.log('selected Heading css-->', this.Headingcolor);

    switch (this.Headingcolor) {
      case 'Heading-red': {
        this.HeadingTextRed = true;
        console.log('inside switch', this.HeadingTextRed);
        break;
      }
      case 'Heading-white': {
        this.HeadingTextWhite = true;
        console.log('inside switch', this.HeadingTextWhite);
        break;
      }
      case 'Heading-black': {
        this.HeadingTextBlack = true;
        console.log('inside switch', this.HeadingTextBlack);
        break;
      }
      case 'Heading-green': {
          this.HeadingTextGreen = true;
          console.log('inside switch', this.HeadingTextGreen);
          break;
      }
      default: {
        console.log('Invalid choice heading');
        break;
      }
    }


    this.makeupdate();
  }

  makeupdate() {
    this. dynamicfooter = {
      'footer-wrapper-deeppink': this.deeppinkTheme,
      'footer-wrapper-dodgerblue': this.dodgerblueTheme,
      'footer-wrapper-orangered': this.orangeredTheme,
      'footer-wrapper-black': this.blackTheme
     };
    console.log('After footer upadte value-->', this.dynamicfooter );

    this. dynamicHeaderFontStyle = {
      'header-text-sans': this.headerTextSans,
      'header-text-cursive': this.headerTextcursive,
      'header-text-monospace': this.headerTextmono,
     };
    console.log('HEADET TEXT COLOR After upadte value-->', this.dynamicHeaderFontStyle );

    this. dynamicFooterTextColor = {
      'Footer-red': this.FooterTextRed,
      'Footer-white': this.FooterTextWhite,
      'Footer-black': this.FooterTextBlack,
      'Footer-green': this.FooterTextGreen
     };
    console.log('Footer TEXT COLOR After upadte value-->', this.dynamicFooterTextColor );

    this. dynamicHeadingTextColor = {
      'Heading-red': this.HeadingTextRed,
      'Heading-white': this.HeadingTextWhite,
      'Heading-black': this.HeadingTextBlack,
      'Heading-green': this.HeadingTextGreen
     };
    console.log('Footer Heading TEXT COLOR After upadte value-->', this.dynamicHeadingTextColor );

  }
}
