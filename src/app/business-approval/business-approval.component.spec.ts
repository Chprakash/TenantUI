import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessApprovalComponent } from './business-approval.component';

describe('BusinessApprovalComponent', () => {
  let component: BusinessApprovalComponent;
  let fixture: ComponentFixture<BusinessApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
