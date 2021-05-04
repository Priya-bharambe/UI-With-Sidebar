import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralphysicianComponent } from './generalphysician.component';

describe('GeneralphysicianComponent', () => {
  let component: GeneralphysicianComponent;
  let fixture: ComponentFixture<GeneralphysicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralphysicianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralphysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
