import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IBusinessType } from './business-type';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessTypeService {


  private url: string = environment.tenant_baseurl + '/businesstypes';
  constructor(private http: HttpClient) { }

  getBusinessTypes() {
    return this.http.get<IBusinessType[]>(this.url);
  }
}
