import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalSitesComponent } from './regional-sites.component';

describe('RegionalSitesComponent', () => {
  let component: RegionalSitesComponent;
  let fixture: ComponentFixture<RegionalSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionalSitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionalSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
