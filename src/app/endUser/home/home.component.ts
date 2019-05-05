import { Component, OnInit } from '@angular/core';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';
import { ThemeServiceService } from 'src/app/user-theme/theme-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  businessId: any;
  constructor(private themeService: ThemeServiceService, private sessstor: SessionStorageService,
              private localstor: LocalStorageService) { }

  // agInit(params) {
  //   this.data = params.data;
  //   console.log('param data--->', this.data);
  //   }
  ngOnInit() {
    // this.businessId = this.localstor.retrieve('businessid');
    // console.log('In Home Component--->', this.businessId);
    // this.themeService.getTheme(this.businessId)
    // .subscribe(
    //   data => {
    //     console.log('@ home Component GetData For Setting', data);
    //     if (data.id === null) {
    //       this.defaultCssSetting();
    //     } else {
    //       this.setCssSettingFromDB(data);
    //     }
    //   }
    // );

  }

  defaultCssSetting() {
    console.log('In Default method....');
    this.localstor.store('header_background', 'blue-Header');
    this.localstor.store('header_color', 'Header-white');
    this.localstor.store('header_font_style', 'header-text-sans');
    this.localstor.store('logo', 'false');

    this.localstor.store('footer_background', 'dodgerblue');
    this.localstor.store('footer_text_color', 'Footer-black');
    this.localstor.store('Heading_text_color', 'Heading-white');
    this.localstor.store('footer_font_style', 'header-text-sans');
    this.localstor.store('map-Status', 'true');
    this.localstor.store('sliderAlignment', 'horizontal');
    location.reload();
  }

  setCssSettingFromDB(param) {
    console.log('In DB method....', param);
    this.localstor.store('header_background', param.headerCSS.backGroundColor);
    this.localstor.store('header_color', param.headerCSS.contentTextColor);
    this.localstor.store('header_font_style', param.headerCSS.fontStyle);
    this.localstor.store('logo', param.headerCSS.isLogoRequired);

    this.localstor.store('footer_background', param.footerCSS.backGroundColor);
    this.localstor.store('footer_text_color', param.footerCSS.contentTextColor);
    this.localstor.store('Heading_text_color', param.footerCSS.headingTextColor);
    this.localstor.store('footer_font_style', param.footerCSS.fontStyle);
    this.localstor.store('map-Status', param.footerCSS.isMapEnabled);
    location.reload();
    }

}
