import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'TenantUI/node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {
  approvalUrl = environment.tenant_baseurl + '/businesses';
  constructor(private httpclient: HttpClient) { }

  getApproval(): Observable <any> {
    return this.httpclient.get(this.approvalUrl);
}

}
