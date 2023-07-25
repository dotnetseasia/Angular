import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialTypeOfProspectComponent } from './special-type-of-prospect.component';

describe('SpecialTypeOfProspectComponent', () => {
  let component: SpecialTypeOfProspectComponent;
  let fixture: ComponentFixture<SpecialTypeOfProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialTypeOfProspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialTypeOfProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
