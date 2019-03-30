import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IRegion } from './IRegion';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private getCountriesUrl: string = environment.tenant_baseurl + '/regions';
  private getStatesUrl: string = environment.tenant_baseurl + '/regions?countryId=';
  private getCitiesUrl: string = environment.tenant_baseurl + '/regions?stateId=';
  private getAerasUrl: string = environment.tenant_baseurl + '/regions?cityId=';
  private getZipsUrl: string = environment.tenant_baseurl + '/regions?areaId=';

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<IRegion>(this.getCountriesUrl);
  }

  getStates(countryId: number) {
    return this.http.get<IRegion>(this.getStatesUrl + countryId);
  }

  getCities(stateId: number) {
    return this.http.get<IRegion>(this.getCitiesUrl + stateId);
  }

  getAreas(cityId: number) {
    return this.http.get<IRegion>(this.getAerasUrl + cityId);
  }

  getZips(areaId: number) {
    return this.http.get<IRegion>(this.getZipsUrl + areaId);
  }
}
