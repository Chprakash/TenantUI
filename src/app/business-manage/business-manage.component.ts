import { Component, OnInit } from '@angular/core';
import { BusinessPublishService } from './business-publish.service';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { ThemeServiceService } from '../user-theme/theme-service.service';

@Component({
  selector: 'app-business-manage',
  templateUrl: './business-manage.component.html',
  styleUrls: ['./business-manage.component.css']
})
export class BusinessManageComponent implements OnInit {
data: any;
bussinesUrl: any;
  constructor(private publishserive: BusinessPublishService, private router: Router, private locstor: LocalStorageService,
              private themeService: ThemeServiceService) { }

  agInit(params) {
    this.data = params.data;
    // console.log('param data--->', this.data);
    }
  ngOnInit() {
  }
  setPublish(param) {
    // alert('Publish clicked..');
    console.log('PUBLISH--->', this.data);
    // this.bussinesUrl = this.data.url;
    // console.log('bussinesUrl--->', this.bussinesUrl);
    this.locstor.store('BusinessId', this.data.businessId);
    // this.router.navigate(['/endHome']);
    // window.open(this.bussinesUrl, '_blank');
    window.open( 'http://localhost:4200' + '/endHome', '_blank');

    // -------------------Get Theme API Call-------------------------
    // this.themeService.getTheme(this.data.businessId)
    // .subscribe(
    //   data => {
    //     console.log('GetData For Settinggggggggggg', data);
    //     if (data.id === null) {
    //       this.defaultCssSetting();
    //     } else {
    //       this.setCssSettingFromDB(data);
    //     }
    //   }
    // );

    // window.open( 'http://localhost:4200' + '/endHome', '_blank');
  }

  // defaultCssSetting() {
  //   console.log('In Default method....');
  //   this.locstor.store('header_background', 'blue-Header');
  //   this.locstor.store('header_color', 'Header-white');
  //   this.locstor.store('header_font_style', 'header-text-sans');
  //   this.locstor.store('logo', 'false');

  //   this.locstor.store('footer_background', 'dodgerblue');
  //   this.locstor.store('footer_text_color', 'Footer-black');
  //   this.locstor.store('Heading_text_color', 'Heading-white');
  //   this.locstor.store('footer_font_style', 'header-text-sans');
  //   this.locstor.store('map-Status', 'true');
  //   this.locstor.store('sliderAlignment', 'horizontal');
  //   location.reload();
  // }

  // setCssSettingFromDB(param) {
  //   console.log('In DB method....', param);
  //   this.locstor.store('header_background', param.headerCSS.backGroundColor);
  //   this.locstor.store('header_color', param.headerCSS.contentTextColor);
  //   this.locstor.store('header_font_style', param.headerCSS.fontStyle);
  //   this.locstor.store('logo', param.headerCSS.isLogoRequired);

  //   this.locstor.store('footer_background', param.footerCSS.backGroundColor);
  //   this.locstor.store('footer_text_color', param.footerCSS.contentTextColor);
  //   this.locstor.store('Heading_text_color', param.footerCSS.headingTextColor);
  //   this.locstor.store('footer_font_style', param.footerCSS.fontStyle);
  //   this.locstor.store('map-Status', param.footerCSS.isMapEnabled);
  //   location.reload();
  //   }
}
