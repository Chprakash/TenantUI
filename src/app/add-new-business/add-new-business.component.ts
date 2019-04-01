import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import { Router } from '@angular/router';
import { AddNewBusiness } from './add-new-business';
import { BusinessTypeService } from './business-type.service';
import { RegionService } from './region.service';
import { IRegion } from './IRegion';
import { ICountry } from './country';
import { IState } from './state';
import { ICity } from './city';
import { IArea } from './area';
import { IZip } from './zip';

@Component({
  selector: 'app-add-new-business',
  templateUrl: './add-new-business.component.html',
  styleUrls: ['./add-new-business.component.css']
})
export class AddNewBusinessComponent implements OnInit {
  errorMessage = '';
// tslint:disable-next-line:variable-name
user_fname;
// tslint:disable-next-line:variable-name
user_lname;
// tslint:disable-next-line:variable-name
user_fullname;
// show = true;

  private businessTypes = [];
  private iRegion: IRegion;
  private countries: ICountry[];
  private states: IState[];
  private cities: ICity[];
  private areas: IArea[];
  private zips: IZip[];


  private addNewBusiness = new AddNewBusiness('', null, null, null, '', null, null, null, null,  '', null, '');
  userID: any;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private businessTypeService: BusinessTypeService, private regionService: RegionService, private storage: LocalStorageService) { }

  ngOnInit() {
    this.userID = this.storage.retrieve('id');
    // this.user_lname = this.storage.retrieve('lastname');
    // this.user_fullname = this.user_fname + ' ' + this.user_lname ;
    console.log('Add new full name', this.user_fullname);

    this.businessTypeService.getBusinessTypes()
      .subscribe(
        data => {
          this.businessTypes = data;
        });

    this.regionService.getCountries()
      .subscribe(
        data => {
          this.iRegion = data,
          this.countries = this.iRegion.countries;
        });
  }


  getStates(id: number) {
        this.regionService.getStates(id)
      .subscribe(
        data => {
          this.iRegion = data,
          this.states = this.iRegion.states;
        });
  }

  getCities(id: number) {
    this.regionService.getCities(id)
      .subscribe(
        data => {
          this.iRegion = data,
          this.cities = this.iRegion.cities;
        });
  }

  getAreas(id: number) {
    this.regionService.getAreas(id)
      .subscribe(
        data => {
          this.iRegion = data,
          this.areas = this.iRegion.areas;
        });
  }

  getZips(id: number) {
    this.regionService.getZips(id)
      .subscribe(
        data => {
          this.iRegion = data,
          this.zips = this.iRegion.zips;
        });
  }

  addnewbusiness(param) {
    console.log('Add new Business--->', param);
    // tslint:disable-next-line:no-string-literal
    param['userId'] = this.userID;
    this.businessTypeService.addnewbusines(param)
    .subscribe(
      data => {
        console.log('Success...', data);
        this.router.navigate(['./businessapproval']);
      },
      error => this.errorMessage = error.statusText
    );
    console.log(this.errorMessage);
  }

}
