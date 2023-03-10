import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancereportsComponent } from './insurancereports.component';

describe('InsurancereportsComponent', () => {
  let component: InsurancereportsComponent;
  let fixture: ComponentFixture<InsurancereportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancereportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
