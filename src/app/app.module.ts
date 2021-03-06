import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { AdminforgotComponent } from './adminforgot/adminforgot.component';
import { NgxWebstorageModule} from 'ngx-webstorage';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginserviceService } from './adminlogin/loginservice.service';
// import { ApprovalComponent } from './approval/approval.component';
// import { ApplicationsComponent } from './applications/applications.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AgGridModule } from 'ag-grid-angular/main';
// import { ToggleButtonComponent } from './approval/toggle-button/toggle-button.component';
// import { PublishButtonComponent } from './applications/publish-button/publish-button.component';
import { AddNewBusinessComponent } from './add-new-business/add-new-business.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllBusinessComponent } from './all-business/all-business.component';
import { HeaderComponent } from './header/header.component';
import { BusinessManageComponent } from './business-manage/business-manage.component';
import { BusinessApprovalComponent } from './business-approval/business-approval.component';
import { SettingComponent } from './all-business/setting/setting.component';
import { ApprovalStatusComponent } from './business-approval/approval-status/approval-status.component';
import { ThemeComponent } from './all-business/theme/theme.component';
import { UserThemeComponent } from './user-theme/user-theme.component';

import { FooterEndComponent } from './endUser/footer-end/footer-end.component';
import { NavbarEndComponent } from './endUser/navbar-end/navbar-end.component';
import { CarouselComponent } from './endUser/carousel/carousel.component';
import { HomeComponent } from './endUser/home/home.component';
import { ProductDetailsComponent } from './endUser/product-details/product-details.component';
import { Product1Component } from './endUser/product1/product1.component';
import { ProductSettingComponent } from './product-setting/product-setting.component';
// import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminregistrationComponent,
    AdminforgotComponent,
    DashBoardComponent,
    // SideMenuComponent,
    // ApprovalComponent,
    // ApplicationsComponent,
    NavbarComponent,
    // ToggleButtonComponent,
    // PublishButtonComponent,
    AddNewBusinessComponent,
    PageNotFoundComponent,
    AllBusinessComponent,
    HeaderComponent,
    BusinessManageComponent,
    BusinessApprovalComponent,
    SettingComponent,
    ApprovalStatusComponent,
    ThemeComponent,
    UserThemeComponent,

    FooterEndComponent,
    NavbarEndComponent,
    CarouselComponent,
    HomeComponent,
    NavbarEndComponent,
    ProductDetailsComponent,
    Product1Component,
    ProductSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    // HttpClient,
    NgxWebstorageModule.forRoot(),
    AgGridModule.withComponents([ ])
  ],
  providers: [LoginserviceService],
  entryComponents: [ BusinessManageComponent, SettingComponent, ApprovalStatusComponent, ThemeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
