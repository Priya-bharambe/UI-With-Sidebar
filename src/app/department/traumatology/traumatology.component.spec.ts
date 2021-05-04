import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraumatologyComponent } from './traumatology.component';

describe('TraumatologyComponent', () => {
  let component: TraumatologyComponent;
  let fixture: ComponentFixture<TraumatologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraumatologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraumatologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
