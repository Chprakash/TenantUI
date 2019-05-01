import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
// import { Observable } from 'TenantUI/node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessPublishService {
  userid = '';
  adminUlr = environment.admin_baseurl + '/business/approvals';
  tenantUrl = environment.tenant_baseurl + '/businesses/' + this.userid;
  constructor(private http: HttpClient) { }

}
