import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  call1() {
    alert('call 1');
  }


  call2() {
    alert('call 2');
  }

  call3() {
    alert('call 3');
  }
}
