import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from '../../user-theme/theme-service.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  // private data: any;
  private params: any;

  // parent variable
  getBusinessId: any;

  constructor(private locstor: LocalStorageService, private themeService: ThemeServiceService, private router: Router) { }

    agInit(params) {
      this.params = params.data;
    }

  ngOnInit() {
  }
  themeClick() {
    alert('Theme Clicked...');
    console.log('EVENT...', this.params );
    this.getBusinessId = this.params.businessId;
    console.log('EVENT...Business ID---', this.getBusinessId );

    this.themeService.getTheme(this.getBusinessId)
    .subscribe(
      data => {
        console.log('GetData For Settinggggggggggg', data);
        if (data.id === null) {
          this.defaultCssSetting();
        } else {
          this.setCssSettingFromDB(data);
        }
      }
    );
    this.router.navigate(['/UserTheme']);
  }

defaultCssSetting() {
  console.log('In Default method....');
  // this.locstor.store('111111', this.businessIdfromTheme);
  this.locstor.store('header_background', 'blue-Header');
  this.locstor.store('header_color', 'Header-white');
  this.locstor.store('header_font_style', 'header-text-sans');
  this.locstor.store('logo', 'false');

  this.locstor.store('footer_background', 'dodgerblue');
  this.locstor.store('footer_text_color', 'Footer-black');
  this.locstor.store('Heading_text_color', 'Heading-white');
  this.locstor.store('footer_font_style', 'header-text-sans');
  this.locstor.store('map-Status', 'true');
  this.locstor.store('sliderAlignment', 'horizontal');
}

setCssSettingFromDB(param) {
  console.log('In DB method....', param);
  this.locstor.store('header_background', param.headerCSS.backGroundColor);
  this.locstor.store('header_color', param.headerCSS.contentTextColor);
  this.locstor.store('header_font_style', param.headerCSS.fontStyle);
  this.locstor.store('logo', param.headerCSS.isLogoRequired);

  this.locstor.store('footer_background', param.footerCSS.backGroundColor);
  this.locstor.store('footer_text_color', param.footerCSS.contentTextColor);
  this.locstor.store('Heading_text_color', param.footerCSS.headingTextColor);
  this.locstor.store('footer_font_style', param.footerCSS.fontStyle);
  this.locstor.store('map-Status', param.footerCSS.isMapEnabled);
  // location.reload();
  }
}
