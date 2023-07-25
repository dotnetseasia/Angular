import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyMoveInBonusComponent } from './early-move-in-bonus.component';

describe('EarlyMoveInBonusComponent', () => {
  let component: EarlyMoveInBonusComponent;
  let fixture: ComponentFixture<EarlyMoveInBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarlyMoveInBonusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarlyMoveInBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
