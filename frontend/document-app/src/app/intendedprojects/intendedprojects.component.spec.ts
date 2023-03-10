import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntendedprojectsComponent } from './intendedprojects.component';

describe('IntendedprojectsComponent', () => {
  let component: IntendedprojectsComponent;
  let fixture: ComponentFixture<IntendedprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntendedprojectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntendedprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
