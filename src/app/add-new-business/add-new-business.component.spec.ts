import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBusinessComponent } from './add-new-business.component';

describe('AddNewBusinessComponent', () => {
  let component: AddNewBusinessComponent;
  let fixture: ComponentFixture<AddNewBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
