import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  bbusinessID;
  settingApiUrl = environment.tenant_baseurl + '/theme';
  // getSettingApiUrl = environment.tenant_baseurl + '/theme/5ca77322db4cfd3c54f702e3';

  constructor(private http: HttpClient, private locstor: LocalStorageService) { }

  getbsuinessId() {
    console.log('@@@get Method for bussId', this.bbusinessID);
    return this.bbusinessID;
}
  apply(payload): Observable<any> {
    // payload.businessId = this.bbusinessID;
    return this.http.post(this.settingApiUrl, payload)
    .pipe(catchError(this.errorHandler));
  }


  getTheme(businessId): Observable <any> {
    this.bbusinessID = businessId;
    this.locstor.store('getBussId', this.bbusinessID);
    console.log('@ bbusinssss', this.bbusinessID);
    return this.http.get(this.settingApiUrl + '/' + businessId);
}

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
