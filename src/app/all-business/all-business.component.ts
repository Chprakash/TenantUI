import { Component, OnInit } from '@angular/core';
import { BusinessManageComponent } from './../business-manage/business-manage.component';
import { SettingComponent } from './setting/setting.component';
import { ThemeComponent } from './theme/theme.component';
import { AllBusinessModel } from './allBusinessModel';
import { AllbusinessService } from './allbusiness.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-all-business',
  templateUrl: './all-business.component.html',
  styleUrls: ['./all-business.component.css']
})
export class AllBusinessComponent implements OnInit {
approvedData: AllBusinessModel[];
private gridApi;
private gridColumnApi;

  constructor(private BusinessService: AllbusinessService, private locstor: LocalStorageService) { }

  columnDefs = [
    {headerName: 'Business Name', field: 'businessName', width: 300, resizable: true, cellStyle: {'text-align': 'left'}},
    {headerName: 'Theme', cellRendererFramework: ThemeComponent, width: 300, resizable: true },
    {headerName: 'Manage', cellRendererFramework: SettingComponent, width: 280, resizable: true},
    {headerName: 'Publish', cellRendererFramework : BusinessManageComponent, width: 280, resizable: true, autoHeight: true}

];

 rowData: any[] = this.approvedData;

  ngOnInit() {
    this.BusinessService.getApprovalBusiness()
      .subscribe(
        data => {
          console.log('All-Business-->', data[0].businessId);
          this.rowData = data;
          this.locstor.store('businessId', data[0].businessId);
        }
      );
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    console.log('gridApi', this.gridApi);
    console.log('gridColumnApi', this.gridColumnApi);
  }

}
