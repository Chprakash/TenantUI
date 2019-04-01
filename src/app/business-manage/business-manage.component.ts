import { Component, OnInit } from '@angular/core';
import { BusinessPublishService } from './business-publish.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-manage',
  templateUrl: './business-manage.component.html',
  styleUrls: ['./business-manage.component.css']
})
export class BusinessManageComponent implements OnInit {
data: any;
  constructor(private publishserive: BusinessPublishService, private router: Router) { }

  agInit(params) {
    this.data = params.data;
    // console.log('param data--->', this.data);
    }
  ngOnInit() {
  }
  setPublish(param) {
    alert('Publish clicked..');
    console.log('PUBLISH--->', this.data);

    // this.publishserive.adminPost(param)
    // .subscribe(
    //   data => {
    //     console.log('Success...DATA FROM LOGIN' + data);
    //
    //   }
    // );

  }
}
