import { Injectable } from '@angular/core';
import { signupdata } from './signupdata';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {


urlapi = environment.tenant_baseurl + '/users';

  constructor(private http: HttpClient) { }

  login(signupinfo: signupdata ): Observable<any> {
    return this.http.post(this.urlapi, signupinfo)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.name || 'Server Error');
  }
}
