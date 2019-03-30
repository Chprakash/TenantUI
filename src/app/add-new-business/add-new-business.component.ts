import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
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
// tslint:disable-next-line:variable-name
user_fname;
// tslint:disable-next-line:variable-name
user_lname;
// show = true;

  private businessTypes = [];
  private iRegion: IRegion;
  private countries: ICountry[];
  private states: IState[];
  private cities: ICity[];
  private areas: IArea[];
  private zips: IZip[];


  private addNewBusiness = new AddNewBusiness('', null, null, null, '', null, null, null, null,  '', null, '');
  // tslint:disable-next-line:max-line-length
  constructor(private businessTypeService: BusinessTypeService, private regionService: RegionService, private storage: LocalStorageService) { }

  ngOnInit() {
    this.user_fname = this.storage.retrieve('firstname');
    this.user_lname = this.storage.retrieve('lastname');
    console.log(this.user_fname);

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

  addnewbusiness(data) {
    console.log('Add new Business--->', data);
  }

}
