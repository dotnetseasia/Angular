import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSourceComponent } from './market-source.component';

describe('MarketSourceComponent', () => {
  let component: MarketSourceComponent;
  let fixture: ComponentFixture<MarketSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketSourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
