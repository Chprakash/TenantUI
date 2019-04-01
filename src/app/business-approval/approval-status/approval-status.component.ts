import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval-status',
  templateUrl: './approval-status.component.html',
  styleUrls: ['./approval-status.component.css']
})
export class ApprovalStatusComponent implements OnInit {
  approvalStatus: any;
  testapproval: any;
  textColor = '' ;

  constructor() { }
agInit(param) {
  this.testapproval = param.value;
  console.log('PARAMS VALUE--->', this.testapproval);
  // tslint:disable-next-line:triple-equals
  if (this.testapproval == 0) {
    this.approvalStatus = 'Send Request';
    this.textColor = 'yellow';
  } else if (this.testapproval === 1) {
      this.approvalStatus = 'Pending';
      this.textColor = 'Orange';
  } else if ( this.testapproval === 2) {
      this.approvalStatus = 'Approved';
      this.textColor = 'green';
  } else if (this.testapproval === -1) {
      this.approvalStatus = 'Blocked';
      this.textColor = 'red';
  }
}
  ngOnInit() {
  }

}
