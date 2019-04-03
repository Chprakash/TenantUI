import { Component, OnInit } from '@angular/core';
import { BusinessManageComponent } from './../business-manage/business-manage.component';
import { SettingComponent } from './setting/setting.component';
import { ThemeComponent } from './theme/theme.component';
import { AllBusinessModel } from './allBusinessModel';
import { AllbusinessService } from './allbusiness.service';

@Component({
  selector: 'app-all-business',
  templateUrl: './all-business.component.html',
  styleUrls: ['./all-business.component.css']
})
export class AllBusinessComponent implements OnInit {
approvedData: AllBusinessModel[];
  constructor(private BusinessService: AllbusinessService) { }

  columnDefs = [
    {headerName: 'Business Name', field: 'businessName', width: 300, resizable: true, cellStyle: {'text-align': 'left'}},
    {headerName: 'Theme', cellRendererFramework: ThemeComponent, width: 300, resizable: true },
    {headerName: 'Manage', cellRendererFramework: SettingComponent, width: 280, resizable: true},
    {headerName: 'Publish', cellRendererFramework : BusinessManageComponent, width: 280, resizable: true, autoHeight: true}

];
//   rowData = [
//     { make: 'Toyota', model: 'Celica', price: 35000, dummy: 'XYZ' },
//     { make: 'Ford', model: 'Mondeo', price: 32000, dummy: 'XYZ' },
//     { make: 'Porsche', model: 'Boxter', price: 72000, dummy: 'XYZ' }
// ];

 rowData: any[] = this.approvedData;

  ngOnInit() {
    this.BusinessService.getApprovalBusiness()
      .subscribe(
        data => {
          this.rowData = data;
        }
      );
  }

}
