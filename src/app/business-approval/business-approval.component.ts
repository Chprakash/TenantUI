import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-approval',
  templateUrl: './business-approval.component.html',
  styleUrls: ['./business-approval.component.css']
})
export class BusinessApprovalComponent implements OnInit {

  constructor() { }
  columnDefs = [
    {headerName: 'Name', field: 'make' },
    {headerName: 'Theme', field: 'model' },
    {headerName: 'Publish', field: 'price'},
    {headerName: 'Manage', field: 'dummy'}
];
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, dummy: 'XYZ' },
    { make: 'Ford', model: 'Mondeo', price: 32000, dummy: 'XYZ' },
    { make: 'Porsche', model: 'Boxter', price: 72000, dummy: 'XYZ' }
];
  ngOnInit() {
  }

}
