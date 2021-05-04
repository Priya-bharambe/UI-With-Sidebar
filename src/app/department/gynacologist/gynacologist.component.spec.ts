import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GynacologistComponent } from './gynacologist.component';

describe('GynacologistComponent', () => {
  let component: GynacologistComponent;
  let fixture: ComponentFixture<GynacologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GynacologistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GynacologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
