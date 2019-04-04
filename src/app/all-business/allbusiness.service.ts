import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

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
