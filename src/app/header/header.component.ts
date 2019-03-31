import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  user_fname;
  // tslint:disable-next-line:variable-name
  user_lname;

  constructor(private storage: LocalStorageService) { }

  ngOnInit() {
    this.user_fname = this.storage.retrieve('firstname');
    this.user_lname = this.storage.retrieve('lastname');
    console.log(this.user_fname);

  }

}
