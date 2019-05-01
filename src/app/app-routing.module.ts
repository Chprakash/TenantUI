import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { AdminforgotComponent } from './adminforgot/adminforgot.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddNewBusinessComponent } from './add-new-business/add-new-business.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllBusinessComponent } from './all-business/all-business.component';
import { BusinessApprovalComponent } from './business-approval/business-approval.component';
import { UserThemeComponent } from './user-theme/user-theme.component';

import { CarouselComponent } from './endUser/carousel/carousel.component';
import { HomeComponent } from './endUser/home/home.component';
import { ProductDetailsComponent } from './endUser/product-details/product-details.component';
import { Product1Component } from './endUser/product1/product1.component';
import { ProductSettingComponent } from './product-setting/product-setting.component';

const routes: Routes = [
{  path : '' , redirectTo : '/login' , pathMatch : 'full'},
{  path : 'registration' , component: AdminregistrationComponent },
{  path : 'login' , component: AdminloginComponent},
{  path : 'forgot' , component: AdminforgotComponent},
{  path : 'dashboard' , component: DashBoardComponent},
{  path : 'navbar' , component: NavbarComponent},
{  path : 'addnewbusiness' , component: AddNewBusinessComponent},
{  path : 'allbusiness' , component: AllBusinessComponent},
{  path : 'businessapproval' , component: BusinessApprovalComponent},
{  path : 'UserTheme' , component: UserThemeComponent},
{  path : 'productSetting' , component: ProductSettingComponent},

{  path : 'carsole' , component: CarouselComponent},
{  path : 'endHome' , component: HomeComponent},
{  path : 'productdetails' , component: ProductDetailsComponent},
{  path : 'product1' , component: Product1Component},

{  path : '**', component : PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

