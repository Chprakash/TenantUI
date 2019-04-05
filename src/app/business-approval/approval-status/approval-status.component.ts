import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';
import {LocalStorageService} from 'ngx-webstorage';
import { ApprovalService } from '../approval.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-approval-status',
  templateUrl: './approval-status.component.html',
  styleUrls: ['./approval-status.component.css']
})
export class ApprovalStatusComponent implements OnInit {
  approvalStatus: any;
  testapproval: any;
  textColor = '' ;
  display;
  status;
  businessData;
  payload = {tenantUserId: '', businessId: '', businessName: '', loggedInUserId: '' };
  approvalUrl;
  userId: any;
  Id;

  constructor(private storage: LocalStorageService, private appService: ApprovalService, private router: Router ) { }
agInit(param) {
  this.testapproval = param.value;
  this.businessData = param.data;
  console.log('PARAMS VALUE--->', this.testapproval);
  console.log('PARAMS DATA--->', this.businessData);
  // tslint:disable-next-line:triple-equals
  if (this.testapproval == 0) {
    this.approvalStatus = 'Send Request';
    this.textColor = 'yellow';
    this.display = true;
  } else if (this.testapproval === 1) {
      this.approvalStatus = 'Pending';
      this.textColor = 'Orange';
      this.status = true;
  } else if ( this.testapproval === 2) {
      this.approvalStatus = 'Approved';
      this.textColor = 'lightgreen';
      this.status = true;
  } else if (this.testapproval === -1) {
      this.approvalStatus = 'Blocked';
      this.textColor = '#F94E4E';
      this.status = true;
  }
}
  ngOnInit() {
  }
  sendrequest() {
    alert('send request');
    this.userId = this.storage.retrieve('id');
    this.approvalUrl = environment.tenant_baseurl + '/businesses/';
    console.log('URL--->', this.approvalUrl);
    this.payload.tenantUserId = this.userId;
    this.payload.businessId = this.businessData.id;
    this.payload.businessName = this.businessData.companyName;
    this.payload.loggedInUserId = this.userId;
    console.log('payload-->', this.payload);
    this.Id = this.businessData.id;
    this.appService.getUrl(this.Id);

    this.appService.sendRequestAdmin(this.payload)
    .subscribe(
      data => {
        console.log('Admin Response', data);
        // this.router.navigate(['/businessapproval']);
      }
    );

    this.appService.sendRequestTenant(this.businessData)
    .subscribe(
      data => {
        console.log('Admin Response', data);
      }
    );
  }

}
