import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildspecialComponent } from './childspecial.component';

describe('ChildspecialComponent', () => {
  let component: ChildspecialComponent;
  let fixture: ComponentFixture<ChildspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
