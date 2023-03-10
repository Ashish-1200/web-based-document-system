import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentinventoryComponent } from './equipmentinventory.component';

describe('EquipmentinventoryComponent', () => {
  let component: EquipmentinventoryComponent;
  let fixture: ComponentFixture<EquipmentinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentinventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
