import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-manage',
  templateUrl: './business-manage.component.html',
  styleUrls: ['./business-manage.component.css']
})
export class BusinessManageComponent implements OnInit {
data: any;
  constructor() { }

  agInit(params) {
    this.data = params.value;
    }
  ngOnInit() {
  }
  setmanage() {
    alert('Button clicked..');
  }
}
