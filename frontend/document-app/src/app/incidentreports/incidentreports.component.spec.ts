import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentreportsComponent } from './incidentreports.component';

describe('IncidentreportsComponent', () => {
  let component: IncidentreportsComponent;
  let fixture: ComponentFixture<IncidentreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentreportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
