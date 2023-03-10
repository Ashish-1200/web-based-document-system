import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinincialreportsComponent } from './finincialreports.component';

describe('FinincialreportsComponent', () => {
  let component: FinincialreportsComponent;
  let fixture: ComponentFixture<FinincialreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinincialreportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinincialreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
