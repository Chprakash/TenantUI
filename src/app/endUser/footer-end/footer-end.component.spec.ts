import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEndComponent } from './footer-end.component';

describe('FooterEndComponent', () => {
  let component: FooterEndComponent;
  let fixture: ComponentFixture<FooterEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
