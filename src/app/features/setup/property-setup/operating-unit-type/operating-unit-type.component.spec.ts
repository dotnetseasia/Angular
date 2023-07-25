import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingUnitTypeComponent } from './operating-unit-type.component';

describe('OperatingUnitTypeComponent', () => {
  let component: OperatingUnitTypeComponent;
  let fixture: ComponentFixture<OperatingUnitTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatingUnitTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatingUnitTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
