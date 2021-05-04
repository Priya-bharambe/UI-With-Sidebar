import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpthalmologyComponent } from './opthalmology.component';

describe('OpthalmologyComponent', () => {
  let component: OpthalmologyComponent;
  let fixture: ComponentFixture<OpthalmologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpthalmologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpthalmologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
