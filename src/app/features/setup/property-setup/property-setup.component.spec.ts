import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySetupComponent } from './property-setup.component';

describe('PropertySetupComponent', () => {
  let component: PropertySetupComponent;
  let fixture: ComponentFixture<PropertySetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertySetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
