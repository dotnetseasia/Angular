import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkOrderComponent } from './manage-work-order.component';

describe('ManageWorkOrderComponent', () => {
  let component: ManageWorkOrderComponent;
  let fixture: ComponentFixture<ManageWorkOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWorkOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
