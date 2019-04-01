import { Component, OnInit } from '@angular/core';
import { BusinessManageComponent } from './../business-manage/business-manage.component';
import { SettingComponent } from './setting/setting.component';

@Component({
  selector: 'app-all-business',
  templateUrl: './all-business.component.html',
  styleUrls: ['./all-business.component.css']
})
export class AllBusinessComponent implements OnInit {

  constructor() { }

  columnDefs = [
    {headerName: 'Name', field: 'make' },
    {headerName: 'Theme', field: 'model' },
    {headerName: 'Manage', cellRendererFramework: SettingComponent},
    {headerName: 'Publish', cellRendererFramework : BusinessManageComponent}

];
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, dummy: 'XYZ' },
    { make: 'Ford', model: 'Mondeo', price: 32000, dummy: 'XYZ' },
    { make: 'Porsche', model: 'Boxter', price: 72000, dummy: 'XYZ' }
];
  ngOnInit() {
  }

}
