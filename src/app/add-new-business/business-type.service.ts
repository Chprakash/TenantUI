import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IBusinessType } from './business-type';
import { environment } from './../../environments/environment';
import { addnewbusiness } from './addnewbusiness';

@Injectable({
  providedIn: 'root'
})
export class BusinessTypeService {


  private url: string = environment.tenant_baseurl + '/businesstypes';
  private url1: string = environment.tenant_baseurl + '/businesses';
  constructor(private http: HttpClient) { }

  getBusinessTypes() {
    return this.http.get<IBusinessType[]>(this.url);
  }

  addnewbusines(param: addnewbusiness) {
    return this.http.post(this.url1, param);
  }
}
