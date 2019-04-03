import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'TenantUI/node_modules/rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllbusinessService {
  Url = environment.admin_baseurl + '/applications/approved';

  constructor(private httpclient: HttpClient) { }

  getApprovalBusiness(): Observable <any> {
    return this.httpclient.get(this.Url);
}
}
