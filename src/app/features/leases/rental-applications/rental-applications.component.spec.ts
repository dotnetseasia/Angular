import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalApplicationsComponent } from './rental-applications.component';

describe('RentalApplicationsComponent', () => {
  let component: RentalApplicationsComponent;
  let fixture: ComponentFixture<RentalApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalApplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
