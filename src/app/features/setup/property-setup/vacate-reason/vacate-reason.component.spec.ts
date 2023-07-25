import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacateReasonComponent } from './vacate-reason.component';

describe('VacateReasonComponent', () => {
  let component: VacateReasonComponent;
  let fixture: ComponentFixture<VacateReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacateReasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacateReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
