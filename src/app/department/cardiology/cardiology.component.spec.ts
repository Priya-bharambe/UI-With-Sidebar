import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiologyComponent } from './cardiology.component';

describe('CardiologyComponent', () => {
  let component: CardiologyComponent;
  let fixture: ComponentFixture<CardiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardiologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
