import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { ThemeServiceService } from './theme-service.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { UserThemeModal} from './UserThemeModal';

@Component({
  selector: 'app-user-theme',
  templateUrl: './user-theme.component.html',
  styleUrls: ['./user-theme.component.css']
})
export class UserThemeComponent implements OnInit {

  headerBackground = '';
  headerTextColor = '';
  headerTextStyle = '';
  footerBackground = '';
  footerTextColor = '';
  footerHeadingColor: any;
  footerTextStyle: any;
  map: any;
  subImageOption: any;
  settingTheme: any = {};
  headerCSS: any = {};
  footerCSS: any = {};
  headerLogo: any;
  imageUpload: any;
  ComapnyName: boolean;
  Company: any;
  errorMessage: any;
  selectedFile: File = null;
  logoApi = environment.tenant_baseurl + '/logos';


  constructor(private locstor: LocalStorageService, private themeService: ThemeServiceService,
              private http: HttpClient) { }

  ngOnInit() {

  }
// -------------------- Apply API call-----------------
  apply() {
    alert('');
    this.headerCSS.backGroundColor = (this.locstor.retrieve('header_background'));
    this.headerCSS.fontStyle = (this.locstor.retrieve('header_font_style'));
    this.headerCSS.contentTextColor = (this.locstor.retrieve('header_color'));
    this.headerCSS.isLogoRequired = (this.locstor.retrieve('logo'));
    this.headerCSS.logoURL = 'assets/bags/logo.png';

    this.footerCSS.backGroundColor = (this.locstor.retrieve('footer_background'));
    this.footerCSS.fontStyle = (this.locstor.retrieve('footer_font_style'));
    this.footerCSS.contentTextColor = (this.locstor.retrieve('footer_text_color'));
    this.footerCSS.headingTextColor = (this.locstor.retrieve('heading_text_color'));
    this.footerCSS.isMapEnabled = (this.locstor.retrieve('map-status'));

    this.settingTheme.userId = (this.locstor.retrieve('id'));
    this.settingTheme.businessId = this.themeService.bbusinessID;
    // this.settingTheme.businessId = '5cc3eb5c9fef1f5da4c1635e';

    this.settingTheme.headerCSS = this.headerCSS;
    this.settingTheme.footerCSS = this.footerCSS;

    console.log('@@BUSINESS ID====-->',  this.settingTheme.businessId);
    console.log('Header CSS-->', this.headerCSS);
    console.log('Footer CSS-->', this.footerCSS);
    console.log('Setting Theme CSS-->', this.settingTheme);


    // -------------------- Set CSS API call-----------------

    this.themeService.apply(this.settingTheme)
    .subscribe (
      data => {
        console.log('success', data);
      },
      error => this.errorMessage = error.statusText
    );

  }
    // -------------------- Logo Upload-----------------
  onFileSelected(event) {
    // console.log(event);
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('businessLogo', this.selectedFile, this.selectedFile.name);
    console.log(this.selectedFile);
    this.http.post(this.logoApi, fd)
    .subscribe(
      data => {
        console.log(data);
      }
    );
  }

    // -------------------- Set CSS Setting-----------------
  setHeaderBackground(event: any) {

    this.headerBackground = event.target.value;
    console.log('Set HeaderBackground-color', this.headerBackground);
    this.locstor.store('header_background', this.headerBackground);
    location.reload();
  }

  setheaderTextColor(event: any) {

    this.headerTextColor = event.target.value;
    console.log('Set HeaderBackground-color', this.headerTextColor);
    this.locstor.store('header_color', this.headerTextColor);
    location.reload();
  }

  setheaderTextStyle(event: any) {

    this.headerTextStyle = event.target.value;
    console.log('Set HeaderBackground-color', this.headerTextStyle);
    this.locstor.store('header_font_style', this.headerTextStyle);
    location.reload();
  }

  setheaderLogo(event: any) {
    this.headerLogo = event.target.value;
    console.log('Set Header Logo', this.headerLogo);
    this.locstor.store('logo', this.headerLogo);
    this.imageUpload = this.headerLogo;
    // location.reload();
    if (this.imageUpload === 'true') {
      this.ComapnyName = false;
    } else {
      this.ComapnyName = true;
      this.imageUpload = false;
    }
  }
  onKey(event: any) { // without type info
    this.Company = event.target.value ;
    // alert(this.Company);
    this.locstor.store('companyName', this.Company);
  }
// ------------Footer-----------

setFooterBackground(event: any) {

  this.footerBackground = event.target.value;
  console.log('Set FooterBackground-color', this.footerBackground);
  this.locstor.store('footer_background', this.footerBackground);
  location.reload();
}

setFooterTextColor(event: any) {

  this.footerTextColor = event.target.value;
  console.log('Set HeaderBackground-color', this.footerTextColor);
  this.locstor.store('footer_text_color', this.footerTextColor);
  location.reload();
}

setFooterHeadingColor(event: any) {

  this.footerHeadingColor = event.target.value;
  console.log('Set HeaderBackground-color', this.footerHeadingColor);
  this.locstor.store('Heading_text_color', this.footerHeadingColor);
  location.reload();
}

setFootererTextStyle(event: any) {

  this.footerTextStyle = event.target.value;
  console.log('Set HeaderBackground-color', this.footerTextStyle);
  this.locstor.store('footer_font_style', this.footerTextStyle);
  location.reload();
}

isMap(event: any) {
  this.map = event.target.value;
  console.log('Set HeaderBackground-color', this.map);
  this.locstor.store('map-Status', this.map);
  location.reload();
}


setsubImageOption(event: any) {
  this.subImageOption = event.target.value;
  console.log('Set sub Image Option', this.subImageOption);
  this.locstor.store('sliderAlignment', this.subImageOption);
  location.reload();
}

}
