import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreGrameComponent } from './pre-grame.component';

describe('PreGrameComponent', () => {
  let component: PreGrameComponent;
  let fixture: ComponentFixture<PreGrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreGrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreGrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
