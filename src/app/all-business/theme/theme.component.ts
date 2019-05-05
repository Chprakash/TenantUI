import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from '../../user-theme/theme-service.service';
import { LocalStorageService, SessionStorageService} from 'ngx-webstorage';
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

  constructor(private locstor: LocalStorageService, private sessStor: SessionStorageService,
              private themeService: ThemeServiceService, private router: Router) { }

    agInit(params) {
      this.params = params.data;
    }

  ngOnInit() {
  }
  themeClick() {
    this.sessStor.clear();
    // this.locstor.clear('themeid');
    // this.locstor.removeItem('themeid');
    // window.localStorage.removeItem('themeid');


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
  console.log('In Default method Theme component ....');
  this.locstor.store('DB', 'NO');

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
  location.reload();
}

setCssSettingFromDB(param) {
  console.log('In DB method Theme component....', param);
  this.locstor.store('DB', 'YES');

  this.locstor.store('header_background', param.headerCSS.backGroundColor);
  this.locstor.store('header_color', param.headerCSS.contentTextColor);
  this.locstor.store('header_font_style', param.headerCSS.fontStyle);
  this.locstor.store('logo', param.headerCSS.isLogoRequired);

  this.locstor.store('footer_background', param.footerCSS.backGroundColor);
  this.locstor.store('footer_text_color', param.footerCSS.contentTextColor);
  this.locstor.store('Heading_text_color', param.footerCSS.headingTextColor);
  this.locstor.store('footer_font_style', param.footerCSS.fontStyle);
  this.locstor.store('map-Status', param.footerCSS.isMapEnabled);
  console.log('@@@Theme ID', param.id);
  this.sessStor.store('themeId', param.id);
  location.reload();
  }
}
