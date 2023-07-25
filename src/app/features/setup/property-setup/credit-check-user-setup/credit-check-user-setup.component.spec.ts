import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCheckUserSetupComponent } from './credit-check-user-setup.component';

describe('CreditCheckUserSetupComponent', () => {
  let component: CreditCheckUserSetupComponent;
  let fixture: ComponentFixture<CreditCheckUserSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCheckUserSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCheckUserSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
