import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurologyComponent } from './neurology.component';

describe('NeurologyComponent', () => {
  let component: NeurologyComponent;
  let fixture: ComponentFixture<NeurologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeurologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeurologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
