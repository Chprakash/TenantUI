import { Component, OnInit } from '@angular/core';
import { ApprovalStatusComponent} from './approval-status/approval-status.component';
import { ApprovalService } from './approval.service';
import { Approvallist } from './Approvallist';

@Component({
  selector: 'app-business-approval',
  templateUrl: './business-approval.component.html',
  styleUrls: ['./business-approval.component.css']
})
export class BusinessApprovalComponent implements OnInit {
  approvalData: Approvallist[];

  constructor(private appservice: ApprovalService) { }
  columnDefs = [
    {headerName: 'Business Name', field: 'companyName' },
    {headerName: 'Business Type', field: 'businessTypeName' },
    {headerName: 'Created Date', field: 'createdDate'},
    {headerName: 'Approved Date', field: 'apprpvedDate'},
    {headerName: 'Approval Status', field: 'approvalStatus', cellRendererFramework: ApprovalStatusComponent }
];
//   rowData = [
//     { companyName: 'Toyota', businessTypeName: 'Celica', createdDate: 35000, apprpvedDate: 'XYZ', approvalStatus: 0},
//     { companyName: 'Ford', businessTypeName: 'Mondeo', createdDate: 32000, apprpvedDate: 'XYZ', approvalStatus: 1 },
//     { companyName: 'Porsche', businessTypeName: 'Boxter', createdDate: 72000, apprpvedDate: 'XYZ', approvalStatus: 2 }
// ];

rowData: any [] = this.approvalData;
  ngOnInit() {

    this.appservice.getApproval()
    .subscribe
    (
      data => {
        this.rowData = data;
        console.log('approvalData', this.approvalData);
        console.log('ROWDATA-->', this.rowData);
      }
    );
  }

}
