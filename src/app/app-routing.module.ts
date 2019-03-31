import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { AdminforgotComponent } from './adminforgot/adminforgot.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
// import { ApprovalComponent } from './approval/approval.component';
import { ApplicationsComponent } from './applications/applications.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { SideMenuComponent } from './side-menu/side-menu.component';
import { AddNewBusinessComponent } from './add-new-business/add-new-business.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllBusinessComponent } from './all-business/all-business.component';
import { BusinessApprovalComponent } from './business-approval/business-approval.component';


const routes: Routes = [
{  path : '' , redirectTo : '/adminlogin' , pathMatch : 'full'},
{  path : 'adminregistration' , component: AdminregistrationComponent },
{  path : 'adminlogin' , component: AdminloginComponent},
{  path : 'adminforgot' , component: AdminforgotComponent},
{  path : 'dashboard' , component: DashBoardComponent},
// {  path : 'approval' , component: ApprovalComponent},
{  path : 'application' , component: ApplicationsComponent},
{  path : 'navbar' , component: NavbarComponent},
// {  path : 'sidemenu' , component: SideMenuComponent},
{  path : 'addnewbusiness' , component: AddNewBusinessComponent},
{  path : 'allbusiness' , component: AllBusinessComponent},
{  path : 'businessapproval' , component: BusinessApprovalComponent},
{  path : '**', component : PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

