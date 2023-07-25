import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageScheduleComponent } from './mortgage-schedule.component';

describe('MortgageScheduleComponent', () => {
  let component: MortgageScheduleComponent;
  let fixture: ComponentFixture<MortgageScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MortgageScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
