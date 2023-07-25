import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGuestCardComponent } from './new-guest-card.component';

describe('NewGuestCardComponent', () => {
  let component: NewGuestCardComponent;
  let fixture: ComponentFixture<NewGuestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGuestCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGuestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
