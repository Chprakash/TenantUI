import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  bbusinessID;
  settingApiUrl = environment.tenant_baseurl + '/theme';
  // getSettingApiUrl = environment.tenant_baseurl + '/theme/5ca77322db4cfd3c54f702e3';

  constructor(private http: HttpClient) { }


  apply(payload): Observable<any> {
    payload.businessId = this.bbusinessID;
    return this.http.post(this.settingApiUrl, payload)
    .pipe(catchError(this.errorHandler));
  }


  getTheme(businessId): Observable <any> {
    this.bbusinessID = businessId;
    console.log('@ bbusinssss', this.bbusinessID);
    return this.http.get(this.settingApiUrl + '/' + businessId);
}

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
