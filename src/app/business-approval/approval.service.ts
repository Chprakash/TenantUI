import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'TenantUI/node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApprovalService {
  approvalUrl = environment.tenant_baseurl + '/businesses';
  AdminApproval = environment.admin_baseurl + '/business/approvals';
  TenantApproval = '';

  constructor(private httpclient: HttpClient) { }

  getApproval(): Observable <any> {
    return this.httpclient.get(this.approvalUrl);
}
getUrl(param) {
  console.log('GetURL param--->', param );
  this.TenantApproval = this.approvalUrl + '/' + param;
  console.log('Tenantc plus user Id...', this.TenantApproval);
}
sendRequestAdmin(param): Observable<any> {
  console.log('Service Admin Request-->', param);
  return this.httpclient.post(this.AdminApproval, param);
}

sendRequestTenant(param): Observable<any> {
  console.log('Service Tenant Request--->', param);
  return this.httpclient.put(this.TenantApproval, '');
}

}
