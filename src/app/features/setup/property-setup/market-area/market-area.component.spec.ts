import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketAreaComponent } from './market-area.component';

describe('MarketAreaComponent', () => {
  let component: MarketAreaComponent;
  let fixture: ComponentFixture<MarketAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
