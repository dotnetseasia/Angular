import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseRentComponent } from './increase-rent.component';

describe('IncreaseRentComponent', () => {
  let component: IncreaseRentComponent;
  let fixture: ComponentFixture<IncreaseRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreaseRentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncreaseRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
