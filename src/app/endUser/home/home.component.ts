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
  checkPublish: any;
  constructor(private themeService: ThemeServiceService, private sessstor: SessionStorageService,
              private localstor: LocalStorageService) { }

  // agInit(params) {
  //   this.data = params.data;
  //   console.log('param data--->', this.data);
  //   }
  ngOnInit() {
    this.checkPublish = this.localstor.retrieve('publish');
    console.log('PPPPPPPublish', this.checkPublish);
    this.businessId = this.localstor.retrieve('businessid');
    console.log('In Home Component--->', this.businessId);

    if (this.checkPublish) {
      // alert('If yes');
      this.themeService.getTheme(this.businessId)
    .subscribe(
      data => {
        console.log('@ home Component GetData For Setting', data);
        if (data.id === null) {
          this.defaultCssSetting();
        } else {
          this.setCssSettingFromDB(data);
        }
      }
    );
    // ------------------else----------
    } else {
      // alert('IF NO');
    }
 }

  defaultCssSetting() {
    console.log('In Default method....');
    this.sessstor.store('header_background', 'blue-Header');
    this.sessstor.store('header_color', 'Header-white');
    this.sessstor.store('header_font_style', 'header-text-sans');
    this.sessstor.store('logo', 'false');

    this.sessstor.store('footer_background', 'dodgerblue');
    this.sessstor.store('footer_text_color', 'Footer-black');
    this.sessstor.store('Heading_text_color', 'Heading-white');
    this.sessstor.store('footer_font_style', 'header-text-sans');
    this.sessstor.store('map-Status', 'true');
    this.sessstor.store('sliderAlignment', 'horizontal');
    // location.reload();
  }

  setCssSettingFromDB(param) {
    console.log('In DB method....', param);
    this.sessstor.store('header_background', param.headerCSS.backGroundColor);
    this.sessstor.store('header_color', param.headerCSS.contentTextColor);
    this.sessstor.store('header_font_style', param.headerCSS.fontStyle);
    this.sessstor.store('logo', param.headerCSS.isLogoRequired);

    this.sessstor.store('footer_background', param.footerCSS.backGroundColor);
    this.sessstor.store('footer_text_color', param.footerCSS.contentTextColor);
    this.sessstor.store('Heading_text_color', param.footerCSS.headingTextColor);
    this.sessstor.store('footer_font_style', param.footerCSS.fontStyle);
    this.sessstor.store('map-Status', param.footerCSS.isMapEnabled);
    // location.reload();
    }

}
